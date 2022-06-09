import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../consts/colors';

const styles = StyleSheet.create({
  container: {
    ...{width: '100%', height: 30, marginTop: '2.46%'},
    ...(Dimensions.get('screen').height <= 640
      ? {marginTop: '2.46%'}
      : {marginTop: 35}),
  },
  text1: {
    fontSize: 16,
    color: colors.termscolor,
    marginRight: 3,
  },
  text2: {color: colors.bluetitle, fontSize: 16},
  rowstyle: {flex: 1, flexDirection: 'row', alignSelf: 'center'},
});

export default styles;
