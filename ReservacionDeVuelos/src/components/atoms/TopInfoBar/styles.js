import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 60,
    marginLeft: 30,
    marginTop: 25,
  },
  viewinfo: {width: Dimensions.get('screen').width - 60, height: 61},
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },
  text: {marginLeft: 5, marginTop: 10, color: '#2E2F30'},
});

export default styles;
