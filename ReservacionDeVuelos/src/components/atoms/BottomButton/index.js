import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function BottomButton({navigation}) {
  return (
    <TouchableOpacity
      style={styles.containerButton}
      onPress={() => navigation.navigate('FinishScreen')}>
      <Text style={styles.textButton}>Next</Text>
    </TouchableOpacity>
  );
}
