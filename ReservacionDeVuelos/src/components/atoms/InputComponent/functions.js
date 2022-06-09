import styles from './style';

const func = {
  textstyle: title => {
    return {
      ...styles.titleInput,
      ...(title === 'First Name' ? styles.font18 : styles.font16),
    };
  },
  inputstyle: text => {
    return {
      ...styles.input,
      ...(text ? styles.blue : styles.gray),
    };
  },
};

export default func;
