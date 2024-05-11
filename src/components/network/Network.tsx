import React from 'react';
import {Text, View} from 'react-native';
import {WifiEntry} from 'react-native-wifi-reborn';
import styles from './styles';

interface Props {
  network: WifiEntry;
}

const Network: React.FC<Props> = ({network}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SSID: {network.SSID}</Text>
      <Text style={styles.text}>BSSID: {network.BSSID}</Text>
      <Text style={styles.text}>Frequency: {network.frequency}</Text>
      <Text style={styles.text}>Level: {network.level}</Text>
      <Text style={styles.text}>Timestamp: {network.timestamp}</Text>
    </View>
  );
};

export default Network;
