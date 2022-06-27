import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Countries = ({data}) => {
  return (
    <View style={styles.container}>
      <Icon name="airplane" style={styles.plane} />
      <View style={styles.line}>
        <Text style={styles.abbreviation}>{data.avOrigen}</Text>
        <Text style={styles.abbreviation}>{data.avDestino}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.country}>{data.origen}</Text>
        <Text style={styles.country}>{data.destino}</Text>
      </View>
    </View>
  );
};

export default Countries;
