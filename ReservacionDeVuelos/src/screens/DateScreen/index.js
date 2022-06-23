import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Countries from '../../components/atoms/Countries';
import styles from './styles';
import colors from '../../consts/colors';
import TextIndicator from '../../components/atoms/TextIndicator';
import BackButton from '../../components/atoms/BackButton';

export default function DateScreen({navigation, route}) {
  const values = route.params;
  let date = new Date();
  let mindate = date.toISOString().split('T')[0];
  const [dayMark, setDayMark] = useState(mindate);
  const [flag, setFlag] = useState(false);
  return (
    <View style={styles.background}>
      <BackButton navigation={navigation} />
      <Countries
        avOrigen={values.from.subtitle}
        origen={values.from.title}
        avDestino={values.to.subtitle}
        destino={values.to.title}
      />
      <View style={styles.margin}>
        <TextIndicator text={'Select Date'} />
      </View>
      <View style={styles.container}>
        <Calendar
          minDate={mindate}
          disableAllTouchEventsForDisabledDays={true}
          onDayPress={day => {
            let daymarked = day;
            setDayMark(daymarked.dateString);
            setFlag(true);
          }}
          markedDates={
            !flag
              ? null
              : {
                  [dayMark]: {selected: true, selectedColor: '#5C6DF8'},
                }
          }
          theme={{
            textMonthFontWeight: 'bold',
            textMonthFontSize: 20,
            todayTextColor: 'black',
            dayTextColor: 'black',
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          ...styles.button,
          ...(flag
            ? {backgroundColor: colors.bluetitle}
            : {backgroundColor: colors.inactive}),
        }}
        disabled={!flag}
        onPress={() =>
          navigation.navigate('Passenger', {
            from: values.from,
            to: values.to,
            date: dayMark,
          })
        }>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
