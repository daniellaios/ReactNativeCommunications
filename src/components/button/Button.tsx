import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({title, onPress, disabled = false}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
