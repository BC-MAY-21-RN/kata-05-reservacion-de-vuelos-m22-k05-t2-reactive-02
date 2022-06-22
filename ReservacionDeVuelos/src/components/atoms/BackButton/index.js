import React from 'react';
import {TouchableOpacity} from 'react-native';
import BackSVG from '../../../assets/icons/back.svg';
import styles from './styles';

export default function BackButton({navigation}) {
  return (
    <TouchableOpacity
      style={styles.containerButton}
      onPress={() => navigation.goBack()}>
      <BackSVG />
    </TouchableOpacity>
  );
}
