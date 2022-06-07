import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CardFlights from '../components/molecules/CardFlight';

export const Flights = () => {
  return (
    <View style={styles.container}>
      <CardFlights />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});
