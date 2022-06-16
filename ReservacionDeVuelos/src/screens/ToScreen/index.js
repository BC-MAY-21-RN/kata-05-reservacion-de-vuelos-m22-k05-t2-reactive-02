import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextIndicator from '../../components/atoms/TextIndicator';
import Countries from '../../components/atoms/Countries';
import colors from '../../consts/colors';
import styles from './styles';
import BackButton from '../../components/atoms/BackButton';

const arrayItems = [
  {label: 'Belgrade, Serbia', value: {subtitle: 'Serbia', title: 'BEG'}},
  {label: 'Berlin, Germany', value: {subtitle: 'Germany', title: 'BEL'}},
  {label: 'Oaxaca, México', value: {subtitle: 'México', title: 'OAX'}},
  {label: 'Berlin, Germany', value: {subtitle: 'Germany', title: 'BEL'}},
  {label: 'Oaxaca, México', value: {subtitle: 'México', title: 'OAX'}},
];

const ToScreen = ({navigation, route}) => {
  const [to, setTo] = useState(null);
  const from = route.params.from;

  return (
    <View>
      <BackButton navigation={navigation} />
      <View style={styles.margin}>
        <TextIndicator text={'Where will you be flying to?'} />
      </View>
      <View style={styles.containerList}>
        <SafeAreaView style={styles.container}>
          <RNPickerSelect
            placeholder={{label: 'Select your destine', value: false}}
            onValueChange={value => setTo(value)}
            items={arrayItems}
          />
        </SafeAreaView>
      </View>
      <TouchableOpacity
        style={{
          ...styles.button,
          ...(to != null
            ? {backgroundColor: colors.bluetitle}
            : {backgroundColor: 'gray'}),
        }}
        disabled={!(to != null)}
        onPress={() => {
          //console.log(to, from);
          navigation.navigate('DateScreen', {to: 'a'});
        }}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

/*
const ToScreen = ({navigation, route}) => {
  const [changeStyle, setChangeStyle] = useState(false);

  function validate(data) {
    if (data === false) {
      return setChangeStyle(false);
    } else {
      return setChangeStyle(true);
    }
  }
  return (
    <View>
      <BackButton navigation={navigation} />
      <Countries />
      <View style={styles.margin}>
        <TextIndicator text={'Where will you be flying to?'} />
      </View>
      <View style={styles.containerList}>
        <SafeAreaView style={styles.container}>
          <RNPickerSelect
            placeholder={{label: 'Select location', value: false}}
            onValueChange={value => validate(value)}
            items={[
              {label: 'Belgrade, Serbia', value: 'BEG'},
              {label: 'Guadalajara, Jalisco', value: 'GDL'},
              {label: 'Oaxaca, México', value: 'OAX'},
              {label: 'Berlin, Germany', value: 'BEL'},
              {label: 'San Luis Potosí, México', value: 'SLP'},
            ]}
          />
        </SafeAreaView>
      </View>
      <TouchableOpacity
        style={{
          ...styles.button,
          ...(changeStyle
            ? {backgroundColor: colors.bluetitle}
            : {backgroundColor: 'gray'}),
        }}
        disabled={!changeStyle}
        onPress={() => navigation.navigate('DateScreen')}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};*/

export default ToScreen;
