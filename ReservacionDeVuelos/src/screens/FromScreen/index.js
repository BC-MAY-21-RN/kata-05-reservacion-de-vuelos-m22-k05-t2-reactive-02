import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextIndicator from '../../components/atoms/TextIndicator';
import styles from './styles';
import BackButton from '../../components/atoms/BackButton';
import BottomButton from '../../components/atoms/BottomButton';
import functions from './functions';
import globalstyles from '../../consts/globalstyles';

const arrayItems = [
  {label: 'Belgrade, Serbia', value: {subtitle: 'Serbia', title: 'BEG'}},
  {label: 'Berlin, Germany', value: {subtitle: 'Germany', title: 'BEL'}},
  {label: 'Oaxaca, México', value: {subtitle: 'México', title: 'OAX'}},
  {label: 'Berlin, Germany', value: {subtitle: 'Germany', title: 'BEL'}},
  {label: 'Oaxaca, México', value: {subtitle: 'México', title: 'OAX'}},
];

export default function FromScreen({navigation}) {
  const [item, setItem] = useState(null);
  return (
    <View style={globalstyles.screenContainer}>
      <BackButton navigation={navigation} />
      <TextIndicator text={'Where are you now?'} style={styles.margin} />
      <View style={styles.containerList}>
        <SafeAreaView style={styles.container}>
          <RNPickerSelect
            placeholder={{label: 'Select your location', value: false}}
            onValueChange={value => setItem(value)}
            items={arrayItems}
          />
        </SafeAreaView>
      </View>
      <BottomButton
        screenName={'ToScreen'}
        values={functions.nextValues(item)}
        navigation={navigation}
        text={'next'}
        active={item !== null && item !== false}
      />
    </View>
  );
}
