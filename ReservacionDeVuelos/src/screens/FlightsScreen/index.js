import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import auth from '@react-native-firebase/auth';
import AddButton from '../../components/atoms/AddButton';

const salir = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
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
