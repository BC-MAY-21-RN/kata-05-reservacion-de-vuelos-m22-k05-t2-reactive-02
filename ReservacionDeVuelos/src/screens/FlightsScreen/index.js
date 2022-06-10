import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import auth from '@react-native-firebase/auth';

const salir = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export default function FlightsScreen() {
  return (
    <View>
      <CardFlight />
      <TouchableOpacity onPress={() => salir()}>
        <Text>Salir</Text>
      </TouchableOpacity>
    </View>
  );
}
