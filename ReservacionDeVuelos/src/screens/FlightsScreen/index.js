import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import auth from '@react-native-firebase/auth';
import AddButton from '../../components/atoms/AddButton';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../../context/UserContext';
import {useFocusEffect} from '@react-navigation/native';

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
  const user = React.useContext(UserContext);
  const [data, setData] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (data === true) {
        firestore()
          .collection('flights')
          // Filter results
          .where('uid', '==', user.user.uid)
          .limit(10)
          .get()
          .then(querySnapshot => {
            console.log('Total flights: ', querySnapshot.size);
            querySnapshot.forEach(documentSnapshot => {
              console.log('flight data: ', documentSnapshot.data());
            });
          });
      }
    }, [data, user]),
  );

  return (
    <View style={{height: '100%', width: '100%'}}>
      <CardFlight
        avDestino={flights[0].to.title}
        avOrigen={flights[0].from.title}
        destino={flights[0].to.subtitle}
        origen={flights[0].from.subtitle}
        fecha={flights[0].date}
        passengers={flights[0].passengers}
      />
      <TouchableOpacity onPress={() => setData(true)}>
        <Text>Salir</Text>
      </TouchableOpacity>
      <AddButton navigation={navigation} />
    </View>
  );
}
