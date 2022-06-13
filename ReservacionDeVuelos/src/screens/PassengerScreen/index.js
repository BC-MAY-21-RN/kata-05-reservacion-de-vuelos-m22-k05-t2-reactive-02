import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BackSVG from '../../assets/icons/back.svg';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{marginTop: 9, marginLeft: 30}}
      onPress={() => navigation.goBack()}>
      <BackSVG />
    </TouchableOpacity>
  );
};

/*const TopInfoBar = ({item}) => {
  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
};*/

export default function PassengerScreen({navigation}) {
  return (
    <View>
      <BackButton navigation={navigation} />
      <Text>PassengerScreen</Text>
    </View>
  );
}
