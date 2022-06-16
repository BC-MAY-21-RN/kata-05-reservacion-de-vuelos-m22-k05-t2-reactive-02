import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../consts/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    backgroundColor: colors.inactive,
    height: 40,
    width: Dimensions.get('screen').width - 60,
    marginLeft: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
  margin: {
    marginTop: 30,
    marginBottom: 10,
  },
});

export default styles;
