import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlightsDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>September 3, 2020</Text>
      <Text style={styles.details}>2 passangers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    marginHorizontal: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  details: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default FlightsDetails;
