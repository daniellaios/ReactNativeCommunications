import React, {useEffect, useState} from 'react';
import {
  FlatList,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WifiManager, {WifiEntry} from 'react-native-wifi-reborn';
import {useNetInfo} from '@react-native-community/netinfo';

import Network from '../../components/network/Network';
import styles from './styles';
import Button from '../../components/button/Button';
import NetInfo from '../../components/netinfo/NetInfo';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(true);
  const [wifiList, setWifiList] = useState<WifiEntry[]>([]);

  const navigation = useNavigation();

  const netInfo = useNetInfo();

  console.log('net', netInfo);

  const getNetworks = async (
    loadWifiList: () => Promise<WifiManager.WifiEntry[]>,
  ) => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location permission is required for WiFi connections',
            message:
              'This app needs location permission as this is required  ' +
              'to scan for wifi networks.',
            buttonNegative: 'DENY',
            buttonPositive: 'ALLOW',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // You can now use react-native-wifi-reborn

          const wifiList = await loadWifiList();

          setWifiList(wifiList);

          console.log('wifi list', wifiList);
        } else {
          // Permission denied
          console.log('not granted');
        }
      } catch (error) {
        console.log('permerr', error);
      }
    }
  };

  useEffect(() => {
    if (wifiList.length == 0) {
      getNetworks(WifiManager.loadWifiList);
    }
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      //WifiManager.setEnabled(true);
    }
  }, [enabled]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <NetInfo netInfo={netInfo} />
        <Text style={styles.header}>Wifi Networks</Text>
        <FlatList
          data={wifiList}
          renderItem={({item: network}) => <Network network={network} />}
          keyExtractor={(_, index) => index.toString()}
          style={styles.list}
          nestedScrollEnabled
        />
      </ScrollView>
      <Button
        title={'Get Networks'}
        onPress={() => getNetworks(WifiManager.loadWifiList)}
      />
      <Button
        title={'Re-scan Wifi Networks'}
        onPress={() => getNetworks(WifiManager.reScanAndLoadWifiList)}
      />
      <Button
        title={'Try Http Requests'}
        onPress={() => navigation.navigate('FetchScreen')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
