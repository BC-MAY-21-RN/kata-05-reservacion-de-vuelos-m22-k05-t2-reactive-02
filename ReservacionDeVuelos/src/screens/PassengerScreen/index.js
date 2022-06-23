import React, {useState} from 'react';
import {View} from 'react-native';
import BackButton from '../../components/atoms/BackButton';
import ScrollComponent from '../../components/atoms/ScrollComponent';
import BottomButton from '../../components/atoms/BottomButton';
import styles from './styles';
import TextIndicator from '../../components/atoms/TextIndicator';
import CardFlight from '../../components/molecules/CardFlight';

export default function PassengerScreen({navigation, route}) {
  const [scroll, setScroll] = useState(0);
  const [number, setnumber] = useState(1);
  const values = route.params;
  const changeNumber = num => setnumber(num);
  const changeScroll = num => setScroll(num);

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <CardFlight valueFlight={values} />
      <View style={styles.margin}>
        <TextIndicator text="How many passengers?" />
      </View>
      <ScrollComponent
        changeNumber={changeNumber}
        changeScroll={changeScroll}
        scroll={scroll}
        number={number}
      />
      <BottomButton
        navigation={navigation}
        values={{...values, ...{passengers: number}}}
        screenName={'FinishScreen'}
      />
    </View>
  );
}
