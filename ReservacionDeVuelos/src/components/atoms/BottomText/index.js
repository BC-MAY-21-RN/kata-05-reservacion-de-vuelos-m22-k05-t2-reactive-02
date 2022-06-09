import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import texts from '../../../consts/text';
import styles from './styles';

export default function BottomText({navigation, text, nameScreen}) {
  return (
    <View style={styles.container}>
      <View style={styles.rowstyle}>
        <Text style={styles.text1}>{texts.register.bottomtext}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(nameScreen)}>
          <Text style={styles.text2}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
