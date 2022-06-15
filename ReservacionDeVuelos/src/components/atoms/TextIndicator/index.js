import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function TextIndicator({text}) {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}
