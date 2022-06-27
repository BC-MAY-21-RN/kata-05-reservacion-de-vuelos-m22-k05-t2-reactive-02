import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import TextIndicator from '../../components/atoms/TextIndicator';
import styles from '../FromScreen/styles';
import colors from '../../consts/colors';
import BackButton from '../../components/atoms/BackButton';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../../context/UserContext';

const addFlightFunction = (user, data, navigation) => {
  firestore()
    .collection('flights')
    .add({
      uid: user.user.uid,
      avDestino: data.avDestino,
      avOrigen: data.avOrigen,
      destino: data.destino,
      fecha: data.fecha,
      origen: data.origen,
      passengers: data.passengers,
    })
    .then(() => {
      navigation.navigate('Flights');
    });
};

const FinishScreen = ({navigation, route}) => {
  const data = route.params;
  const user = React.useContext(UserContext);

  return (
    <View>
      <BackButton navigation={navigation} />
      <CardFlight data={route.params} />
      <TextIndicator text="Your Request was Received" style={styles.margin} />
      <TouchableOpacity
        style={{
          ...styles.button,
          ...{backgroundColor: colors.bluetitle},
        }}
        onPress={() => {
          addFlightFunction(user, data, navigation);
        }}>
        <Text style={{...styles.textButton, ...{color: '#ffffff'}}}>
          Finish
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FinishScreen;
