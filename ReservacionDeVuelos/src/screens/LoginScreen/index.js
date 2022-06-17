import React, {useState} from 'react';
import {View, Text} from 'react-native';
import texts from '../../consts/text';
import styles from './styles';
import InputComponent from '../../components/atoms/InputComponent';
import Buttons from '../../components/atoms/Buttons';
import BottomText from '../../components/atoms/BottomText';
import LoginUser from '../../models/LoginUser';

const newObject = object => {
  return new LoginUser(object.valuesLogin.input2, object.valuesLogin.input3);
};

export default function LoginScreen({navigation}) {
  const [form, setform] = useState(new LoginUser());

  const changeForm = (value, key) => {
    form.setValues({[key]: value});
    setform(newObject(form));
    console.log(form.getValues());
  };

  return (
    <View>
      <Text style={styles.title}>{texts.login.title}</Text>
      <InputComponent
        title={'Email'}
        input={'input2'}
        alert={false}
        changeForm={changeForm}
        text={form.getValues().input2.length > 0}
      />
      <InputComponent
        title={'Password'}
        input={'input3'}
        alert={false}
        changeForm={changeForm}
        text={form.getValues().input3.length > 0}
      />
      <Buttons buttonsActive={form.getBool()} form={form.valuesLogin} />
      <BottomText
        navigation={navigation}
        text={'Sign Up'}
        nameScreen={'Register'}
      />
    </View>
  );
}
