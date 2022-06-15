import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 150,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 60,
  },
  lefticon: {
    position: 'absolute',
    left: 0,
    top: 26,
  },
  righticon: {
    position: 'absolute',
    right: 0,
    top: 26,
  },
  scroll: {width: 50, height: 135},
  card: {height: 30, width: 50, alignItems: 'center'},
});

export default styles;
