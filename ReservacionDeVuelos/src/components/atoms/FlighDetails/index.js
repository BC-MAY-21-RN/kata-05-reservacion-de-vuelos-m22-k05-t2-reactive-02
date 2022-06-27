import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const FlightsDetails = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>{data.fecha}</Text>
      <Text style={styles.details}>
        {data.passengers} {data.passengers === undefined ? '' : 'passangers'}
      </Text>
    </View>
  );
};

export default FlightsDetails;
