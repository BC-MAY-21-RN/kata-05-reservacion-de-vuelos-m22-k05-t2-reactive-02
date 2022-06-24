import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Countries from '../../components/atoms/Countries';
import styles from './styles';
import TextIndicator from '../../components/atoms/TextIndicator';
import BackButton from '../../components/atoms/BackButton';
import functions from './functions';
import BottomButton from '../../components/atoms/BottomButton';

const SetDateComponent = ({flag, dayMark, changeDay}) => {
  return (
    <View style={styles.container}>
      <Calendar
        minDate={functions.getDate()}
        disableAllTouchEventsForDisabledDays={true}
        onDayPress={day => changeDay(day.dateString)}
        markedDates={functions.markDay(flag, dayMark)}
        theme={functions.getTheme()}
      />
    </View>
  );
};

export default function DateScreen({navigation, route}) {
  const [dayMark, setDayMark] = useState(functions.getDate());
  const [flag, setFlag] = useState(false);
  const changeDay = day => {
    setDayMark(day);
    setFlag(true);
  };

  return (
    <View style={styles.background}>
      <BackButton navigation={navigation} />
      <Countries values={route.params} />
      <TextIndicator text={'Select Date'} style={styles.margin} />
      <SetDateComponent flag={flag} dayMark={dayMark} changeDay={changeDay} />
      <BottomButton
        navigation={navigation}
        values={{...route.params, ...{fecha: dayMark}}}
        screenName={'Passenger'}
        active={flag}
        text={'next'}
      />
    </View>
  );
}
