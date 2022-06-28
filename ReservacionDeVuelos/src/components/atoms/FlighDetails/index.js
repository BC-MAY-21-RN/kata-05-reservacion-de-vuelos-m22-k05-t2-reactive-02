import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import functions from './functions';

const FlightsDetails = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>{functions.splitDate(data.fecha)}</Text>
      <Text style={styles.details}>
        {data.passengers} {data.passengers === undefined ? '' : 'passangers'}
      </Text>
    </View>
  );
};

export default FlightsDetails;
