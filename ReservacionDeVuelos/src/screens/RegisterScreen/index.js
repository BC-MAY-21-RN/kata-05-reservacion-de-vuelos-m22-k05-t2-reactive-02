import React, {useState} from 'react';
import {View, Text} from 'react-native';
import texts from '../../consts/text';
import InputComponent from '../../components/atoms/InputComponent';
import RegisterUser from '../../models/RegisterUser';
import Buttons from '../../components/atoms/Buttons';
import Terms from '../../components/atoms/Term';
import BottomText from '../../components/atoms/BottomText';
import styles from './styles';

const newObject = object => {
  return new RegisterUser(
    object.valuesRegister.input1,
    object.valuesRegister.input2,
    object.valuesRegister.input3,
    object.valuesRegister.check1,
    object.valuesRegister.check2,
  );
};

const listInputs = [InputComponent, InputComponent, InputComponent];

const listTerm = [
  {Component: Terms, text: 'check1', textCheck: texts.register.term1},
  {Component: Terms, text: 'check2', textCheck: texts.register.term2},
];

const ListInputsComponent = ({changeForm, form, alert}) => {
  return listInputs.map((Component, index) => (
    <Component
      title={texts.register['input' + (index + 1).toString()]}
      changeForm={changeForm}
      input={'input' + (index + 1).toString()}
      text={form.getValues()['input' + (index + 1).toString()].length > 0}
      alert={alert}
    />
  ));
};

const ListTermsComponent = ({form, changeForm}) => {
  return listTerm.map((Component, index) => (
    <Component.Component
      text={Component.textCheck}
      isfirst={index === 0 ? true : false}
      changeForm={changeForm}
      ischecked={form.valuesRegister[Component.text]}
      term={Component.text}
    />
  ));
};

const BottomComponent = ({form, changeAlert, navigation}) => {
  return (
    <View>
      <Buttons
        buttonsActive={form.getBool()}
        form={form.getValues()}
        changeAlert={changeAlert}
      />
      <BottomText
        navigation={navigation}
        textComponent={'Log in'}
        nameScreen={'Login'}
      />
    </View>
  );
};

export default function RegisterScreen({navigation}) {
  const [form, setform] = useState(new RegisterUser());
  const [alert, setAlert] = useState(false);
  const changeForm = (value, key) => {
    form.setValues({[key]: value});
    setform(newObject(form));
  };
  const changeAlert = bool => setAlert(bool);

  return (
    <View>
      <Text style={styles.title}>{texts.register.title}</Text>
      <ListInputsComponent alert={alert} changeForm={changeForm} form={form} />
      <ListTermsComponent changeForm={changeForm} form={form} />
      <BottomComponent
        changeAlert={changeAlert}
        form={form}
        navigation={navigation}
      />
    </View>
  );
}
