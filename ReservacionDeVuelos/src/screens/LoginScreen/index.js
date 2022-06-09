import React from 'react';
import {View, Text} from 'react-native';
import texts from '../../consts/text';
import styles from './styles';
import InputComponent from '../../components/atoms/InputComponent';
import Buttons from '../../components/atoms/Buttons';
import BottomText from '../../components/atoms/BottomText';

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text style={styles.title}>{texts.login.title}</Text>
      <InputComponent title={'Email'} input={'input1'} alert={false} />
      <InputComponent title={'Password'} input={'input2'} alert={false} />
      <Buttons />
      <BottomText
        navigation={navigation}
        text={'Sign Up'}
        nameScreen={'Register'}
      />
    </View>
  );
}
