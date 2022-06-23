import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import TextIndicator from '../../components/atoms/TextIndicator';
import styles from '../FromScreen/styles';
import colors from '../../consts/colors';
import BackButton from '../../components/atoms/BackButton';
import firestore from '@react-native-firebase/firestore';
import UserContext from '../../context/UserContext';

const FinishScreen = ({navigation, route}) => {
  const [changeStyle, setChangeStyle] = useState(true);
  const [addData, setAddData] = useState(true);
  const data = route.params.values;
  console.log(data);
  const user = React.useContext(UserContext);

  if (addData === true) {
    firestore()
      .collection('flights')
      .add({
        uid: user.user.uid,
        avDestino: data.to.title,
        avOrigen: data.from.title,
        destino: data.to.subtitle,
        fecha: data.date,
        origen: data.from.subtitle,
        passangers: data.passengers,
      })
      .then(() => {
        console.log('User added!');
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  }

  return (
    <View>
      <BackButton navigation={navigation} />
      <CardFlight valueFlight={route.params.values} />
      <View style={styles.margin}>
        <TextIndicator text="Your Request was Received" />
      </View>
      <TouchableOpacity
        style={{
          ...styles.button,
          ...(changeStyle
            ? {backgroundColor: colors.bluetitle}
            : {backgroundColor: 'gray'}),
        }}
        onPress={() => {
          navigation.navigate('Flights');
          setAddData(true);
        }}>
        <Text style={styles.textButton}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FinishScreen;
