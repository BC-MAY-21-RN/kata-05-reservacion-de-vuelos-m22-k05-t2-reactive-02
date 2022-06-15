import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextIndicator from '../../components/atoms/TextIndicator';
import Countries from '../../components/atoms/Countries';
import colors from '../../consts/colors';
import styles from './styles';

const ToScreen = ({navigation}) => {
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
      <Countries />
      <TextIndicator text={'Where will you be flying to?'} />
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
        onPress={() => navigation.navigate('Flights')}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ToScreen;