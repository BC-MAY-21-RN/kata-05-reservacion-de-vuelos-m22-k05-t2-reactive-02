import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import texts from '../../../consts/text';
import VisibleSVG from '../../../assets/icons/visible.svg';
import VisibleBlueSVG from '../../../assets/icons/visibleblue.svg';
import styles from './style';
import func from './functions';
import globalstyles from '../../../consts/globalstyles';

const InputTitle = ({title, input, alert}) => {
  return (
    <Text style={func.textstyle(title)}>
      {title}{' '}
      {title !== 'First Name' ? (
        <Text style={!alert ? {} : styles.textpink}>
          {!alert ? '*' : texts.register[input + 'warning']}
        </Text>
      ) : null}
    </Text>
  );
};

export default function InputComponent({
  title,
  changeForm,
  input,
  text,
  alert,
}) {
  const [iconisSelect, setIconIsSelect] = useState(true);
  return (
    <View style={globalstyles.container}>
      <InputTitle title={title} input={input} alert={alert} />
      <TextInput
        secureTextEntry={title === 'Password' ? iconisSelect : false}
        style={func.inputstyle(text)}
        onChange={(e, a) => changeForm(e.nativeEvent.text, input)}
      />
      {title === 'Password' ? (
        <TouchableOpacity
          onPress={() => setIconIsSelect(!iconisSelect)}
          style={styles.icon}>
          {iconisSelect ? <VisibleSVG /> : <VisibleBlueSVG />}
        </TouchableOpacity>
      ) : null}
      {title === 'Password' ? (
        <Text style={styles.textBottom}>{texts.register.textinput3}</Text>
      ) : null}
    </View>
  );
}
