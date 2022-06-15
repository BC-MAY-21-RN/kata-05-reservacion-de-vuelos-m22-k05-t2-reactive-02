import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import ArrorSVG1 from '../../../assets/icons/arrowleft.svg';
import ArrorSVG2 from '../../../assets/icons/arrowright.svg';

const numbers = [
  {text: '', init: -10, finish: -10},
  {text: '1', init: 0, finish: 15, number: 1},
  {text: '2', init: 15, finish: 45, number: 2},
  {text: '3', init: 45, finish: 75, number: 3},
  {text: '4', init: 75, finish: 105, number: 4},
  {text: '5', init: 105, finish: 135, number: 5},
  {text: '6', init: 135, finish: 165, number: 6},
  {text: '7', init: 165, finish: 195, number: 7},
  {text: '8', init: 195, finish: 225, number: 8},
  {text: '9', init: 225, finish: 255, number: 9},
  {text: '10', init: 255, finish: 285, number: 10},
  {text: '11', init: 285, finish: 315, number: 11},
  {text: '12', init: 315, finish: 345, number: 12},
  {text: '13', init: 345, finish: 375, number: 13},
  {text: '14', init: 375, finish: 405, number: 14},
  {text: '15', init: 405, finish: 435, number: 15},
  {text: '16', init: 435, finish: 465, number: 16},
  {text: '17', init: 465, finish: 495, number: 17},
  {text: '', init: -10, finish: -10},
  {text: '', init: -10, finish: -10},
  {text: '', init: -10, finish: -10},
];

const CardNumber = ({text, bool, bool2, bool3}) => {
  return (
    <View style={styles.card}>
      <Text
        style={{
          ...{fontSize: 24, fontWeight: 'bold'},
          ...(bool
            ? {color: '#000000'}
            : bool2 || bool3
            ? {color: '#13141555'}
            : {color: '#13141510'}),
        }}>
        {text}
      </Text>
    </View>
  );
};

const scrollfunction = (changeScroll, changeNumber, scroll, e) => {
  changeScroll(e.nativeEvent.contentOffset.y);
  numbers.map(i => {
    if (scroll >= i.init && scroll <= i.finish) {
      changeNumber(i.number);
    }
  });
};

export default function ScrollComponent({
  changeScroll,
  changeNumber,
  scroll,
  number,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.lefticon}>
        <ArrorSVG1 />
      </View>
      <View style={styles.righticon}>
        <ArrorSVG2 />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={e => scrollfunction(changeScroll, changeNumber, scroll, e)}
        style={styles.scroll}>
        {numbers.map((e, i) => (
          <CardNumber
            key={i}
            text={e.text}
            bool={number === e.number}
            bool2={number - 1 === e.number}
            bool3={number + 1 === e.number}
          />
        ))}
      </ScrollView>
    </View>
  );
}
