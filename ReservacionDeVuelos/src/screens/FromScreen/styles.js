import {StyleSheet} from 'react-native';
import colors from '../../consts/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.inactive,
    width: 315,
    height: 45,
    position: 'absolute',
    marginTop: 560,
    marginHorizontal: 45,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 140,
  },
  container: {
    height: 50,
    marginHorizontal: 30,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  margin: {
    marginTop: 150,
    marginBottom: 50,
  },
});

export default styles;
