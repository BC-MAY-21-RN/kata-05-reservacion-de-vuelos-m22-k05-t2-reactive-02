import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const salir = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

/**
 * Button to go to passengers screen demo
 * @returns
 */
const AddButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.containerButton}
      onPress={() => navigation.navigate('Passenger')}>
      <Text style={styles.textButton}>+</Text>
    </TouchableOpacity>
  );
};

export default function FlightsScreen({navigation}) {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <CardFlight />
      <TouchableOpacity onPress={() => salir()}>
        <Text>Salir</Text>
      </TouchableOpacity>
      <AddButton navigation={navigation} />
    </View>
  );
}
