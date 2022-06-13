import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import BackSVG from '../../assets/icons/back.svg';
import AirPlaneSVG from '../../assets/icons/airplane.svg';
import ScrollComponent from '../../components/atoms/ScrollComponent';

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

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{marginTop: 9, marginLeft: 30}}
      onPress={() => navigation.goBack()}>
      <BackSVG />
    </TouchableOpacity>
  );
};

const TopInfoBar = ({item}) => {
  return (
    <View
      style={{
        width: Dimensions.get('screen').width - 60,
        marginLeft: 30,
        marginTop: 25,
      }}>
      <View style={{width: Dimensions.get('screen').width - 60, height: 61}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderColor: '#D8D8D8',
          }}>
          <TextsComponent
            title={item.from.title}
            subtitle={item.from.subtitle}
            isleft={true}
          />
          <AirPlaneSVG />
          <TextsComponent
            title={item.to.title}
            subtitle={item.to.subtitle}
            isleft={false}
          />
        </View>
      </View>
      <Text style={{marginLeft: 5, marginTop: 10, color: '#2E2F30'}}>
        {item.date}
      </Text>
    </View>
  );
};

const TextsComponent = ({title, subtitle, isleft}) => {
  return (
    <View
      style={{...{position: 'absolute'}, ...(isleft ? {left: 0} : {right: 0})}}>
      <Text
        style={{
          ...{fontSize: 24, color: '#000000'},
          ...(isleft ? {textAlign: 'left'} : {textAlign: 'right'}),
        }}>
        {title}
      </Text>
      <Text
        style={{
          ...{fontSize: 14, color: '#2E2F3070'},
          ...(isleft ? {textAlign: 'left'} : {textAlign: 'right'}),
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

export default function PassengerScreen({navigation}) {
  const [scroll, setScroll] = useState(0);
  const [number, setnumber] = useState(1);

  const changeNumber = num => setnumber(num);
  const changeScroll = num => setScroll(num);

  return (
    <View>
      <BackButton navigation={navigation} />
      <TopInfoBar item={item} />
      <Text
        style={{
          marginLeft: 30,
          fontSize: 32,
          color: '#131415',
          marginTop: 29,
        }}>
        How many passengers?
      </Text>
      <ScrollComponent
        changeNumber={changeNumber}
        changeScroll={changeScroll}
        scroll={scroll}
        number={number}
      />
    </View>
  );
}
