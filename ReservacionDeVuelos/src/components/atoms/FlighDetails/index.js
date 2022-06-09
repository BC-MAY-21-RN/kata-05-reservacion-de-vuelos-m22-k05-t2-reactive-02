import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

const FlightsDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>September 3, 2020</Text>
      <Text style={styles.details}>2 passangers</Text>
    </View>
  );
};

export default FlightsDetails;
