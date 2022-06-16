import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextIndicator from '../../components/atoms/TextIndicator';
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

const FromScreen = ({navigation}) => {
  const [item, setItem] = useState(null);

  return (
    <View>
      <BackButton navigation={navigation} />
      <View style={styles.margin}>
        <TextIndicator text={'Where are you now?'} />
      </View>
      <View style={styles.containerList}>
        <SafeAreaView style={styles.container}>
          <RNPickerSelect
            placeholder={{label: 'Select your location', value: false}}
            onValueChange={value => setItem(value)}
            items={arrayItems}
          />
        </SafeAreaView>
      </View>
      <TouchableOpacity
        style={{
          ...styles.button,
          ...(item != null
            ? {backgroundColor: colors.bluetitle}
            : {backgroundColor: 'gray'}),
        }}
        disabled={!(item != null)}
        onPress={() => {
          navigation.navigate('ToScreen', {from: item});
        }}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FromScreen;
/*
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextIndicator from '../../components/atoms/TextIndicator';
import colors from '../../consts/colors';
import styles from './styles';
import BackButton from '../../components/atoms/BackButton';

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
      <BackButton navigation={navigation} />
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

*/
