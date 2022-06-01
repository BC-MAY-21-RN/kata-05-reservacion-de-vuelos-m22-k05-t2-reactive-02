import React from 'react';
import {View, Text} from 'react-native';
import Button from './src/components/atoms/Button';
import EditText from './src/components/atoms/EditText';
import CheckBox from './src/components/atoms/CheckBoxes';

const App = () => {
  return (
    <View>
      <Text>Hola</Text>
      <EditText />
      <Button />
      <CheckBox />
    </View>
  );
};
export default App;
