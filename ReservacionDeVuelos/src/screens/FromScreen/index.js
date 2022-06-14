import React from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextIndicator from '../../components/atoms/TextIndicator';
import styles from './styles';

const FromScreen = () => {
  return (
    <View>
      <TextIndicator text={'Where are you now?'} />
      <View style={styles.containerList}>
        <SafeAreaView style={styles.container}>
          <RNPickerSelect
            placeholder={{label: 'Select your location', value: null}}
            onValueChange={value => console.log(value)}
            items={[
              {label: 'Belgrade, Serbia', value: 'BEG'},
              {label: 'Berlin, Germany', value: 'BEL'},
              {label: 'Oaxaca, México', value: 'OAX'},
            ]}
          />
        </SafeAreaView>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FromScreen;
