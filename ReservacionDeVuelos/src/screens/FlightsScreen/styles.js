import {StyleSheet} from 'react-native';
import colors from '../../consts/colors';

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    borderRadius: 60,
    position: 'absolute',
    backgroundColor: colors.bluetitle,
    width: 69,
    height: 69,
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 20,
  },
  textButton: {
    fontSize: 50,
    color: '#ffffff',
    alignSelf: 'center',
    paddingBottom: 6,
  },
});

export default styles;
