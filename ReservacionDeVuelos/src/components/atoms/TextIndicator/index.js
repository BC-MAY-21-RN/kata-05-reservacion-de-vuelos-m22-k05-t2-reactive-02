import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function TextIndicator({text, style}) {
  return (
    <View style={style}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}
