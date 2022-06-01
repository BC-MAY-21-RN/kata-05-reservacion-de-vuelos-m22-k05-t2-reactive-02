import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Cbox = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={() =>
          toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)
        }
      />
      <Text style={styles.text}>Terminos y condiciones</Text>
    </View>
  );
};
export default Cbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 20,
  },
  text: {
    margin: 5,
  },
});
