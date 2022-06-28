import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import texts from '../../../consts/text';
import GoogleSVG from '../../../assets/icons/google.svg';
import styles from './styles';
import func from './functions';
import globalstyle from '../../../consts/globalstyles';

export default function Buttons({buttonsActive, form, changeAlert}) {
  return (
    <View style={globalstyle(15, 19, 30).marginTop}>
      <TouchableOpacity
        onPress={() => {
          func.validate(form.input3, form.input2, form.input1, changeAlert);
        }}
        style={func.buttonstyle(buttonsActive)}>
        <Text style={styles.text}>{texts.register.button1}</Text>
      </TouchableOpacity>
      <Text style={styles.ortext}>Or</Text>
      <TouchableOpacity
        onPress={() => func.onGoogleButtonPress().then(() => {})}
        style={func.buttonstyle(buttonsActive)}>
        <Text style={styles.text}>{texts.register.button2}</Text>
        <View style={styles.icon}>
          <GoogleSVG />
        </View>
      </TouchableOpacity>
    </View>
  );
}
