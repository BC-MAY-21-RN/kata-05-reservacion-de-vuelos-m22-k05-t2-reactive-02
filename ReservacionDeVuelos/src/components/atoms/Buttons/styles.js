import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../consts/colors';

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: colors.inactive,
    height: 40,
    width: Dimensions.get('screen').width - 60,
    marginLeft: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ortext: {
    alignSelf: 'center',
    marginVertical: '1.23%',
    color: colors.inactive,
    fontSize: 16,
  },
  icon: {position: 'absolute', left: 28},
  text: {color: colors.white, fontSize: 18},
  buttonActive: {backgroundColor: colors.bluetitle},
});

export default styles;
