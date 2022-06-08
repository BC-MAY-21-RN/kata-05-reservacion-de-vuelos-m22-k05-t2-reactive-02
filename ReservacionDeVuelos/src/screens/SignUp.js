import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/atoms/Button';
import EditText from '../components/atoms/EditText';
import Checkbox from '../components/atoms/CheckBoxes';

export const SignUp = ({navigation}) => {
  const [Password, setPassword] = useState('');
  const [ShowPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <EditText label="First Name" />
      <EditText label="Email*" />
      <EditText
        label="Password*"
        security={!ShowPassword}
        value={Password}
        setValue={setPassword}
        icon={ShowPassword ? 'eye' : 'eye-off'}
        onIconclick={() => setShowPassword(!ShowPassword)}
      />
      <Checkbox text="I agree to the Terms and privacy Policy.*" />
      <Checkbox text="Subscribe for select product updates." />
      <Button
        text="Sign Up"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Button text="Sign Up with Google" />
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    borderColor: '#618DC9',
  },
  container: {
    borderColor: 'black',
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'blue',
    fontSize: 20,
    margin: 20,
  },
});