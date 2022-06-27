import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const FlightsDetails = ({fecha, passengers}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>{fecha}</Text>
      <Text style={styles.details}>
        {passengers} {passengers === undefined ? '' : 'passangers'}
      </Text>
    </View>
  );
};

export default FlightsDetails;
