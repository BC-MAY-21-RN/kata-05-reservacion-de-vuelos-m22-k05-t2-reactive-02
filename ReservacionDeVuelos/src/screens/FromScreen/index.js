import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextIndicator from '../../components/atoms/TextIndicator';
import colors from '../../consts/colors';
import styles from './styles';

const FromScreen = ({navigation}) => {
  const [changeStyle, setChangeStyle] = useState(false);

  function validate(data) {
    if (data === false) {
      console.log('Select your location');
      return setChangeStyle(false);
    } else {
      console.log('data correct');
      return setChangeStyle(true);
    }
  }
  return (
    <View>
      <View style={styles.margin}>
        <TextIndicator text={'Where are you now?'} />
      </View>
      <View style={styles.containerList}>
        <SafeAreaView style={styles.container}>
          <RNPickerSelect
            placeholder={{label: 'Select your location', value: false}}
            onValueChange={value => validate(value)}
            items={[
              {label: 'Belgrade, Serbia', value: 'BEG'},
              {label: 'Berlin, Germany', value: 'BEL'},
              {label: 'Oaxaca, México', value: 'OAX'},
              {label: 'Berlin, Germany', value: 'BEL'},
              {label: 'Oaxaca, México', value: 'OAX'},
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
        onPress={() => navigation.navigate('ToScreen')}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FromScreen;
