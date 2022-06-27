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
  const values = route.params;

  return (
    <View>
      <BackButton navigation={navigation} />
      <Countries avOrigen={values.from.subtitle} origen={values.from.title} />
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
          navigation.navigate('DateScreen', {to: to, from: values.from});
        }}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToScreen;
