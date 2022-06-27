import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import auth from '@react-native-firebase/auth';
import AddButton from '../../components/atoms/AddButton';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../../context/UserContext';
import {useFocusEffect} from '@react-navigation/native';

const salir = () => {
  auth()
    .signOut()
    .then(() => {});
};

export default function FlightsScreen({navigation}) {
  const user = React.useContext(UserContext);
  const [data, setData] = useState(true);
  const [getData, setGetData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (data === true) {
        firestore()
          .collection('flights')
          .where('uid', '==', user.user.uid)
          .get()
          .then(querySnapshot => {
            var dataFlight = [];
            querySnapshot.forEach(documentSnapshot => {
              dataFlight.push(documentSnapshot.data());
              setGetData(dataFlight);
            });
          });
      }
    }, [data, user]),
  );

  return (
    <View style={{height: '100%', width: '100%'}}>
      <FlatList
        data={getData}
        renderItem={({item}) => (
          <CardFlight
            avDestino={item.avDestino}
            avOrigen={item.avOrigen}
            destino={item.destino}
            origen={item.origen}
            fecha={item.fecha}
            passengers={item.passangers}
          />
        )}
      />

      <TouchableOpacity onPress={() => salir()}>
        <Text>Salir</Text>
      </TouchableOpacity>
      <AddButton navigation={navigation} />
    </View>
  );
}
