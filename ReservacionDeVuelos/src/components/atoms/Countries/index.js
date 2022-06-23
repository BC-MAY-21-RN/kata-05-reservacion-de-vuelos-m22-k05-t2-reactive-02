import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Countries = ({avOrigen, avDestino, destino, origen}) => {
  return (
    <View style={styles.container}>
      <Icon name="airplane" style={styles.plane} />
      <View style={styles.line}>
        <Text style={styles.abbreviation}>{avOrigen}</Text>
        <Text style={styles.abbreviation}>{avDestino}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.country}>{origen}</Text>
        <Text style={styles.country}>{destino}</Text>
      </View>
    </View>
  );
};

export default Countries;
