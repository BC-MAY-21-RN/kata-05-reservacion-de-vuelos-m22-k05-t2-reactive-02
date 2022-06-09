import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../consts/colors';

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    width: Dimensions.get('screen').width - 40,
    height: 20.1,
  },
  row: {flex: 1, flexDirection: 'row'},
  text: {color: colors.termscolor, marginLeft: 10, fontSize: 16},
  touchable: {
    width: 20,
    height: 20,
    borderColor: colors.termscolor,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableblue: {
    backgroundColor: colors.bluetitle,
    borderColor: colors.bluetitle,
  },
});

export default styles;
