import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: '#5C6DF8',
    borderRadius: 10,
    height: 45,
    width: Dimensions.get('screen').width - 60,
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    bottom: 45,
    justifyContent: 'center',
  },
  textButton: {color: '#ffffff', fontSize: 18},
});

export default styles;
