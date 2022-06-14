import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';
import Countries from '../../components/atoms/Countries';
import styles from './styles';

export default function LoginScreen({navigation}) {
  let date = new Date();
  let mindate = date.toISOString().split('T')[0];
  const [dayMark, setDayMark] = useState(mindate);
  const [flag, setFlag] = useState(false);
  return (
    <View style={styles.background}>
      <Countries />
      <View style={styles.container}>
        <Text style={styles.title}>Select date</Text>
        <Calendar
          minDate={mindate}
          disableAllTouchEventsForDisabledDays={true}
          onDayPress={day => {
            let daymarked = day;
            setDayMark(daymarked.dateString);
            setFlag(true);
            console.log(dayMark);
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
        style={styles.button}
        onPress={() => navigation.navigate('Flights')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}