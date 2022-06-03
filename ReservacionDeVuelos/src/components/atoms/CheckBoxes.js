import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Checkbox} from 'react-native-paper';

const Cbox = props => {
  const {text} = props;
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default Cbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 15,
  },
  text: {
    color: '#B0B0B0',
    marginVertical: 8,
  },
});
