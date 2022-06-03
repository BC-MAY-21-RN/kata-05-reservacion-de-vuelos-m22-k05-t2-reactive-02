import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/atoms/Button';
import EditText from '../components/atoms/EditText';
import Checkbox from '../components/atoms/CheckBoxes';
import {useNavigation} from '@react-navigation/native';

export const SignUp = ({navigation}) => {
  const [Password, setPassword] = useState('');
  const [ShowPassword, setShowPassword] = useState(false);
  const navigationD = useNavigation();
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
      <Checkbox />
      <Checkbox />
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
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
