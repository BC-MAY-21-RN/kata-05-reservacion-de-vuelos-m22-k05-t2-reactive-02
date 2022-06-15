import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../consts/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginBottom: 15,
  },
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
});

export default styles;
