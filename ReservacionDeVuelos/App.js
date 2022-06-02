import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './src/components/atoms/Button';
import EditText from './src/components/atoms/EditText';
import Checkbox from './src/components/atoms/CheckBoxes';


const App = () => {
  const [ShowPassword, setShowPassword] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <EditText label="First Name" />
      <EditText label="Email*" />
      <EditText 
        label="Password*" 
        security={!ShowPassword}
        icon={ShowPassword ? "eyeo" : "eye"}
        onIconclick={() => setShowPassword(!ShowPassword)}      
      />
      <Checkbox />
      <Button />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'blue',
    fontSize: 20,
    margin: 20,
  }
 
});