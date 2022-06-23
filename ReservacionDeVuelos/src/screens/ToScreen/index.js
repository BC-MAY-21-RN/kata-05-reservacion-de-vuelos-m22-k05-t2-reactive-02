import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TextIndicator from '../../components/atoms/TextIndicator';
import Countries from '../../components/atoms/Countries';
import functions from './functions';
import styles from './styles';
import BackButton from '../../components/atoms/BackButton';
import BottomButton from '../../components/atoms/BottomButton';
import globalstyles from '../../consts/globalstyles';
import texts from '../../consts/text';

const arrayItems = [
  {label: 'Belgrade, Serbia', value: {subtitle: 'Serbia', title: 'BEG'}},
  {label: 'Berlin, Germany', value: {subtitle: 'Germany', title: 'BEL'}},
  {label: 'Oaxaca, México', value: {subtitle: 'México', title: 'OAX'}},
  {label: 'Berlin, Germany', value: {subtitle: 'Germany', title: 'BEL'}},
  {label: 'Oaxaca, México', value: {subtitle: 'México', title: 'OAX'}},
];

export default function ToScreen({navigation, route}) {
  const [to, setTo] = useState(null);
  return (
    <View style={globalstyles.screenContainer}>
      <BackButton navigation={navigation} />
      <Countries values={route.params} />
      <TextIndicator text={texts.to.title} style={styles.margin} />
      <SafeAreaView style={styles.container}>
        <RNPickerSelect
          placeholder={{label: 'Select your destine', value: false}}
          onValueChange={value => setTo(value)}
          items={arrayItems}
        />
      </SafeAreaView>
      <BottomButton
        screenName={'ToScreen'}
        values={functions.nextValues(to, route.params)}
        navigation={navigation}
        text={'next'}
        active={to !== null && to !== false}
      />
    </View>
  );
}
