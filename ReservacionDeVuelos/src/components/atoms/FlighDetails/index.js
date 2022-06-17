import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const FlightsDetails = ({values}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>{values.date}</Text>
      <Text style={styles.details}>
        {values.passengers}{' '}
        {values.passengers === undefined ? '' : 'passangers'}
      </Text>
    </View>
  );
};

export default FlightsDetails;
