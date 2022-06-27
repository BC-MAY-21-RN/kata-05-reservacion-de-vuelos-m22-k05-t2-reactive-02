import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import auth from '@react-native-firebase/auth';
import AddButton from '../../components/atoms/AddButton';

/*import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import auth from '@react-native-firebase/auth';
import AddButton from '../../components/atoms/AddButton';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../../context/UserContext';
import {useFocusEffect} from '@react-navigation/native';*/

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
    .then(() => {});
};

export default function FlightsScreen({navigation}) {
  return (
    <View style={{height: '100%', width: '100%'}}>
      {flights.map((item, index) => (
        <CardFlight valueFlight={item} />
      ))}
      <TouchableOpacity onPress={() => salir()}>
        <Text>Salir</Text>
      </TouchableOpacity>
      <AddButton navigation={navigation} />
    </View>
  );
}
