import {Dimensions} from 'react-native';
import styles from './styles';

const func = {
  containerstyle: isfirst => {
    return {
      ...styles.container,
      ...(Dimensions.get('screen').height <= 640
        ? {marginTop: isfirst ? 23 : 0, marginBottom: 7}
        : {marginTop: isfirst ? 25 : 0, marginBottom: 10}),
    };
  },
  touchablestyle: check => {
    return {
      ...styles.touchable,
      ...(check ? styles.touchableblue : null),
    };
  },
};

export default func;
