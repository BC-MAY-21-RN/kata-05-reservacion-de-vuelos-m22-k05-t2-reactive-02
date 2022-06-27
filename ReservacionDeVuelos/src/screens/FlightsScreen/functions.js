import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

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

const salir = () => {
  auth()
    .signOut()
    .then(() => {});
};

const functions = {
  firebaseDataConsult,
  salir,
};

export default functions;
