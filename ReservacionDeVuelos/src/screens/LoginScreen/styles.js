import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../consts/colors';

const styles = StyleSheet.create({
  title: {
    ...{
      color: colors.bluetitle,
      marginLeft: 20,
      lineHeight: 25,
    },
    ...(Dimensions.get('screen').height <= 640
      ? {
          fontSize: 21,
          marginTop: 14,
          marginBottom: 12,
        }
      : Dimensions.get('screen').height >= 641 &&
        Dimensions.get('screen').height < 730
      ? {
          fontSize: 21,
          marginTop: 29,
          marginBottom: 18,
        }
      : {
          fontSize: 23,
          marginTop: 36,
          marginBottom: 22,
        }),
  },
});

export default styles;
