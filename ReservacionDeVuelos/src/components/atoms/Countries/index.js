import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Countries = ({values}) => {
  return (
    <View style={styles.container}>
      <Icon name="airplane" style={styles.plane} />
      <View style={styles.line}>
        <Text style={styles.abbreviation}>{values.from?.title}</Text>
        <Text style={styles.abbreviation}>{values.to?.title}</Text>
      </View>
      <View style={styles.line}>
        <Text style={styles.country}>{values.from?.subtitle}</Text>
        <Text style={styles.country}>{values.to?.subtitle}</Text>
      </View>
    </View>
  );
};

export default Countries;
