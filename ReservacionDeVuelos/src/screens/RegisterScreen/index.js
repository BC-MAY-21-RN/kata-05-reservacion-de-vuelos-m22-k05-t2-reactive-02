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

export default function RegisterScreen({navigation}) {
  const [form, setform] = useState(new RegisterUser());
  const [buttonsActive, setButtonsActive] = useState(false);
  const [alert, setAlert] = useState(false);

  const changeForm = (value, key) => {
    form.setValues({[key]: value});
    setButtonsActive(form.getBool());
    setform(newObject(form));
  };

  const changeAlert = bool => setAlert(bool);

  return (
    <View>
      <Text style={styles.title}>{texts.register.title}</Text>
      <InputComponent
        title={texts.register.input1}
        changeForm={changeForm}
        input={'input1'}
        text={form.getValues().input1.length > 0}
        alert={alert}
      />
      <InputComponent
        title={texts.register.input2}
        changeForm={changeForm}
        input={'input2'}
        text={form.getValues().input2.length > 0}
        alert={alert}
      />
      <InputComponent
        title={texts.register.input3}
        changeForm={changeForm}
        input={'input3'}
        text={form.getValues().input3.length > 0}
        alert={alert}
      />
      <Terms
        text={texts.register.term1}
        isfirst={true}
        changeForm={changeForm}
        ischecked={form.valuesRegister.check1}
        term={'check1'}
      />
      <Terms
        text={texts.register.term2}
        isfirst={false}
        changeForm={changeForm}
        ischecked={form.valuesRegister.check2}
        term={'check2'}
      />
      <Buttons
        buttonsActive={buttonsActive}
        form={form.getValues()}
        changeAlert={changeAlert}
      />
      <BottomText
        navigation={navigation}
        text={'Log in'}
        nameScreen={'Login'}
      />
    </View>
  );
}
