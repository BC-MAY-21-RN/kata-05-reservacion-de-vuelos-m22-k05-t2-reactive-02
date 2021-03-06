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
import arrayItems from '../../consts/flights';

export default function ToScreen({navigation, route}) {
  const [to, setTo] = useState({});
  return (
    <View style={globalstyles().screenContainer}>
      <BackButton navigation={navigation} />
      <Countries data={route.params} />
      <TextIndicator text={texts.to.title} style={styles.margin} />
      <SafeAreaView style={styles.container}>
        <RNPickerSelect
          placeholder={{label: 'Select your destine', value: false}}
          onValueChange={value => setTo(value)}
          items={functions.newArray(arrayItems, route.params)}
        />
      </SafeAreaView>
      <BottomButton
        screenName={'DateScreen'}
        values={functions.nextValues(to, route.params)}
        navigation={navigation}
        active={to !== null && to !== false}
      />
    </View>
  );
}
