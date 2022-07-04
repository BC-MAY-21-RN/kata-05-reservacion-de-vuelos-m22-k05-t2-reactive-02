import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../consts/colors';

const styles = StyleSheet.create({
  font18: {fontSize: 18},
  font16: {fontSize: 16},
  titleInput: {
    marginLeft: 20,
    marginBottom: '1.23%',
    color: colors.titleInputs,
  },
  input: {
    ...{
      width: Dimensions.get('screen').width - 40,
      borderWidth: 1,
      fontSize: 17,
      marginLeft: 20,
      borderRadius: 2,
    },
    ...(Dimensions.get('screen').height <= 640 ? {height: 40} : {height: 50}),
  },
  textBottom: {
    marginLeft: 20,
    fontSize: 13,
    marginTop: '1.2%',
    color: colors.passwordtextvalidation,
  },
  icon: {
    ...{position: 'absolute', right: 35},
    ...(Dimensions.get('screen').height <= 640 ? {top: 40} : {top: 45}),
  },
  blue: {
    borderColor: colors.bluetitle,
  },
  gray: {
    borderColor: colors.InputBorder,
  },
  colorblue: {
    color: colors.bluetitle,
  },
  textpink: {
    color: colors.pink,
  },
});

export default styles;
