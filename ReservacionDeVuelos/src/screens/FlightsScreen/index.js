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
    <View style={globalstyles.screenContainer}>
      <FlatList
        data={getData}
        renderItem={({item}) => <CardFlight data={item} />}
      />
      <TouchableOpacity onPress={() => console.log(getData)}>
        <Text>Salir</Text>
      </TouchableOpacity>
      <AddButton navigation={navigation} />
    </View>
  );
}
