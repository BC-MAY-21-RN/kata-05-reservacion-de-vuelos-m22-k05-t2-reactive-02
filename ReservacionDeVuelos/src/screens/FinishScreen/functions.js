import firestore from '@react-native-firebase/firestore';

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

const functions = {
  addFlightFunction,
};

export default functions;
