import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Countries = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Text style={styles.abbreviation}>BEG</Text>
        <Icon name="airplane" style={styles.plane} />
        <Text style={styles.abbreviation}>AMS</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.country}>Serbia</Text>
        <Text style={styles.country}>Netherlands</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  abbreviation: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
  country: {
    fontSize: 15,
    color: 'gray',
    paddingVertical: 3,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plane: {
    color: 'blue',
    fontSize: 25,
    marginTop: 15,
  },
  location: {
    fontSize: 10,
  },
});
export default Countries;
