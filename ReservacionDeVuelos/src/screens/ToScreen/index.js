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
<<<<<<< HEAD
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
        screenName={'DateScreen'}
        values={functions.nextValues(to, route.params)}
        navigation={navigation}
        active={to !== null && to !== false}
      />
=======
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
>>>>>>> master
    </View>
  );
}
