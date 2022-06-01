import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const EditTextS = () => {
  return (
    <View style={styles.contain}>
      <TextInput placeholder="Ingresa un texto" />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    color: 'black',
    width: 370,
    height: 50,
    backgroundColor: 'white',
    margin: 20,
    borderColor: 'blue',
    borderWidth: 2,
  },
});

export default EditTextS;
