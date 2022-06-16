import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function BottomButton({navigation, values}) {
  return (
    <TouchableOpacity
      style={styles.containerButton}
      onPress={() => navigation.navigate('FinishScreen', {values})}>
      <Text style={styles.textButton}>Next</Text>
    </TouchableOpacity>
  );
}
