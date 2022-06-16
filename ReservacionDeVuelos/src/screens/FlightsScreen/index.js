import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import auth from '@react-native-firebase/auth';
import AddButton from '../../components/atoms/AddButton';

const flights = [
  {
    from: {title: 'AWS', subtitle: 'Amazon web services'},
    to: {title: 'ML', subtitle: 'Mercado Libre'},
    date: '2022-06-16',
    passengers: 5,
  },
];

const salir = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export default function FlightsScreen({navigation}) {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <CardFlight valueFlight={flights[0]} />
      <TouchableOpacity onPress={() => salir()}>
        <Text>Salir</Text>
      </TouchableOpacity>
      <AddButton navigation={navigation} />
    </View>
  );
}
