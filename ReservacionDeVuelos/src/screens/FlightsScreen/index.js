import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import auth from '@react-native-firebase/auth';
import AddButton from '../../components/atoms/AddButton';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../../context/UserContext';
import {useFocusEffect} from '@react-navigation/native';
import globalstyles from '../../consts/globalstyles';

const salir = () => {
  auth()
    .signOut()
    .then(() => {});
};

const firebaseDataConsult = (user, changeGetData) => {
  firestore()
    .collection('flights')
    .where('uid', '==', user.user.uid)
    .get()
    .then(querySnapshot => {
      var dataFlight = [];
      querySnapshot.forEach(documentSnapshot => {
        dataFlight.push(documentSnapshot.data());
        changeGetData(dataFlight);
      });
    });
};

export default function FlightsScreen({navigation}) {
  const user = React.useContext(UserContext);
  const [getData, setGetData] = useState([]);
  const changeGetData = flight => setGetData(flight);
  useFocusEffect(
    useCallback(() => {
      firebaseDataConsult(user, changeGetData);
    }, [user]),
  );

  return (
    <View style={globalstyles.screenContainer}>
      <FlatList
        data={getData}
        renderItem={({item}) => <CardFlight data={item} />}
      />
      <TouchableOpacity onPress={() => salir()}>
        <Text>Salir</Text>
      </TouchableOpacity>
      <AddButton navigation={navigation} />
    </View>
  );
}
