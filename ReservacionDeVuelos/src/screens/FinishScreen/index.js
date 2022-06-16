import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CardFlight from '../../components/molecules/CardFlight';
import TextIndicator from '../../components/atoms/TextIndicator';
import styles from '../FromScreen/styles';
import colors from '../../consts/colors';
import BackButton from '../../components/atoms/BackButton';

const FinishScreen = ({navigation, route}) => {
  console.log(route.params);
  const [changeStyle, setChangeStyle] = useState(true);
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
        onPress={() => navigation.navigate('Flights')}>
        <Text style={styles.textButton}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FinishScreen;
