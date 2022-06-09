import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

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

export default Countries;
