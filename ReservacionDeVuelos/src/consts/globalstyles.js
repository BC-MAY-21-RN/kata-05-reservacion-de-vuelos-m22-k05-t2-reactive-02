import {StyleSheet, Dimensions} from 'react-native';

const globalstyles = (v1, v2, v3) =>
  StyleSheet.create({
    screenContainer: {width: '100%', height: '100%'},
    marginTop:
      Dimensions.get('screen').height <= 640
        ? {marginTop: v1}
        : Dimensions.get('screen').height >= 641 &&
          Dimensions.get('screen').height < 730
        ? {marginTop: v2}
        : {marginTop: v3},
  });

export default globalstyles;
