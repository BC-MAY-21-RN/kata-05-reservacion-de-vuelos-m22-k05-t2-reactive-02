import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../../consts/colors';

export default function BottomButton({
  navigation,
  values,
  screenName,
  active,
  text,
}) {
  return (
    <TouchableOpacity
      disabled={!active}
      style={{
        ...styles.containerButton,
        ...(active
          ? {backgroundColor: colors.bluetitle}
          : {backgroundColor: colors.inactive}),
      }}
      onPress={() => navigation.navigate(screenName, {...values})}>
      <Text style={styles.textButton}>
        {text === undefined ? 'next' : text}
      </Text>
    </TouchableOpacity>
  );
}
