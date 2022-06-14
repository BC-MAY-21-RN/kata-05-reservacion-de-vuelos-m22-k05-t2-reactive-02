import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import BackSVG from '../../assets/icons/back.svg';
import AirPlaneSVG from '../../assets/icons/airplane.svg';
import ScrollComponent from '../../components/atoms/ScrollComponent';
import styles from './styles';

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

const BottomButton = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#5C6DF8',
        borderRadius: 10,
        height: 45,
        width: Dimensions.get('screen').width - 60,
        position: 'absolute',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        bottom: 45,
        justifyContent: 'center',
      }}>
      <Text style={{color: '#ffffff', fontSize: 18}}>Finish</Text>
    </TouchableOpacity>
  );
};

export default function PassengerScreen({navigation}) {
  const [scroll, setScroll] = useState(0);
  const [number, setnumber] = useState(1);

  const changeNumber = num => setnumber(num);
  const changeScroll = num => setScroll(num);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <BackButton navigation={navigation} />
      <TopInfoBar item={item} />
      <Text style={styles.text}>How many passengers?</Text>
      <ScrollComponent
        changeNumber={changeNumber}
        changeScroll={changeScroll}
        scroll={scroll}
        number={number}
      />
      <BottomButton />
    </View>
  );
}
