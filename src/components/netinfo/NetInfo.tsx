import {NetInfoState} from '@react-native-community/netinfo';
import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

interface Props {
  netInfo: NetInfoState;
}

const NetInfo: React.FC<Props> = ({netInfo}) => {
  const renderObject: any = (obj: any) => {
    return Object.keys(obj).map((key, index) => {
      if (typeof obj[key] == 'object' && obj[key] != null) {
        return renderObject(obj[key]);
      }
      return (
        <Text key={index} style={styles.text}>
          {key}: {!!obj[key] ? obj[key].toString() : 'null'}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Device network info</Text>
      {!!netInfo && renderObject(netInfo)}
    </View>
  );
};

export default NetInfo;
