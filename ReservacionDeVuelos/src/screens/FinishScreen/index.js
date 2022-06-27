import React, {useState, useEffect} from 'react';
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
  const [addData, setAddData] = useState(false);
  const data = route.params.values;

  const user = React.useContext(UserContext);

  useEffect(() => {
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
          navigation.navigate('Flights');
        });
    }
  }, [addData, data, user, navigation]);
  return (
    <View>
      <BackButton navigation={navigation} />
      <CardFlight
        avOrigen={data.from.subtitle}
        origen={data.from.title}
        avDestino={data.to.subtitle}
        destino={data.to.title}
        fecha={data.date}
        passengers={data.passengers}
      />
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
          setAddData(true);
        }}>
        <Text style={styles.textButton}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FinishScreen;
