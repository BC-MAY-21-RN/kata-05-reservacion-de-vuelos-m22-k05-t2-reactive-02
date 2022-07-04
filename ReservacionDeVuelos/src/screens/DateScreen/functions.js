import styles from './styles';
import colors from '../../consts/colors';

const getDate = () => {
  let date = new Date();
  return date.toISOString().split('T')[0];
};

const markDay = (flag, day) => {
  if (!flag) {
    return null;
  } else {
    return {
      [day]: {selected: true, selectedColor: '#5C6DF8'},
    };
  }
};

const getTheme = () => {
  return {
    textMonthFontWeight: 'bold',
    textMonthFontSize: 20,
    todayTextColor: 'black',
    dayTextColor: 'black',
  };
};

const getTouchableStyle = flag => {
  return {
    ...styles.button,
    ...(flag
      ? {backgroundColor: colors.bluetitle}
      : {backgroundColor: colors.inactive}),
  };
};

const functions = {
  getDate,
  markDay,
  getTheme,
  getTouchableStyle,
};

export default functions;
