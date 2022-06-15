import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function BottomButton({navigation}) {
  return (
    <TouchableOpacity style={styles.containerButton}>
      <Text style={styles.textButton}>Finish</Text>
    </TouchableOpacity>
  );
}
