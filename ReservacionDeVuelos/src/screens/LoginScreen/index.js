import React, {useState} from 'react';
import {View, Text} from 'react-native';
import texts from '../../consts/text';
import styles from './styles';
import InputComponent from '../../components/atoms/InputComponent';
import Buttons from '../../components/atoms/Buttons';
import BottomText from '../../components/atoms/BottomText';
import LoginUser from '../../models/LoginUser';

const newObject = object => {
  return new LoginUser(object.valuesLogin.input1, object.valuesLogin.input2);
};

export default function LoginScreen({navigation}) {
  const [form, setform] = useState(new LoginUser());

  const changeForm = (value, key) => {
    form.setValues({[key]: value});
    setform(newObject(form));
  };

  return (
    <View>
      <Text style={styles.title}>{texts.login.title}</Text>
      <InputComponent
        title={'Email'}
        input={'input1'}
        alert={false}
        changeForm={changeForm}
        text={form.getValues().input1.length > 0}
      />
      <InputComponent
        title={'Password'}
        input={'input2'}
        alert={false}
        changeForm={changeForm}
      />
      <Buttons buttonsActive={form.getBool()} />
      <BottomText
        navigation={navigation}
        text={'Sign Up'}
        nameScreen={'Register'}
      />
    </View>
  );
}
