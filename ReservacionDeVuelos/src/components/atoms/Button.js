import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Boton</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4782C5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 30,
  },
  text: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
