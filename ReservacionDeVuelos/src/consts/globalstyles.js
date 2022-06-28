import {StyleSheet, Dimensions} from 'react-native';

const globalstyles = StyleSheet.create({
  screenContainer: {width: '100%', height: '100%'},
  marginTop:
    Dimensions.get('screen').height <= 640
      ? {marginTop: 7}
      : Dimensions.get('screen').height >= 641 &&
        Dimensions.get('screen').height < 730
      ? {marginTop: 15}
      : {marginTop: 18},
});

export default globalstyles;
