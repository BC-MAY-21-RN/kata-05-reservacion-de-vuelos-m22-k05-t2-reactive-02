import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import AddButton from '../../components/atoms/AddButton';
import UserContext from '../../context/UserContext';
import {useFocusEffect} from '@react-navigation/native';
import globalstyles from '../../consts/globalstyles';
import functions from './functions';

export default function FlightsScreen({navigation}) {
  const user = React.useContext(UserContext);
  const [getData, setGetData] = useState([]);
  const changeGetData = flight => setGetData(flight);
  useFocusEffect(
    useCallback(() => {
      functions.firebaseDataConsult(user, changeGetData);
    }, [user]),
  );

  return (
    <View style={globalstyles.screenContainer}>
      <FlatList
        data={getData}
        renderItem={({item}) => <CardFlight data={item} />}
      />
      <TouchableOpacity onPress={() => functions.salir()}>
        <Text>Salir</Text>
      </TouchableOpacity>
      <AddButton navigation={navigation} />
    </View>
  );
}
