import React, {useState} from 'react';
import {View, Text} from 'react-native';
import BackButton from '../../components/atoms/BackButton';
import ScrollComponent from '../../components/atoms/ScrollComponent';
import BottomButton from '../../components/atoms/BottomButton';
import TopInfoBar from '../../components/atoms/TopInfoBar';
import styles from './styles';
import TextIndicator from '../../components/atoms/TextIndicator';

const item = {
  from: {
    title: 'BEG',
    subtitle: 'Serbia',
  },
  to: {
    title: 'AMS',
    subtitle: 'Netherlands',
  },
  date: 'September 3, 2020',
};

export default function PassengerScreen({navigation}) {
  const [scroll, setScroll] = useState(0);
  const [number, setnumber] = useState(1);

  const changeNumber = num => setnumber(num);
  const changeScroll = num => setScroll(num);

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <TopInfoBar item={item} />
      <View style={styles.margin}>
        <TextIndicator text="How many passengers?" />
      </View>
      <ScrollComponent
        changeNumber={changeNumber}
        changeScroll={changeScroll}
        scroll={scroll}
        number={number}
      />
      <BottomButton navigation={navigation} />
    </View>
  );
}
