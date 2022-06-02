import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditTextS = ({
  label = '',
  security = false,
  value = '',
  setValue = null,
  icon,
  onIconclick,
}) => {
  const changeText = text => setValue(text);
  const [changeBorder, setChangeBorder] = useState(false);
  const onLikePress = () => setChangeBorder(!changeBorder);
  return (
    <View style={styles.row}>
      <View style={styles.textContainer}>
        <Text style={styles.textLabel}>{label}</Text>
        <View style={styles.positionElements}>
          <TextInput
            type="Text"
            secureTextEntry={security}
            value={value}
            onChangeText={changeText}
            style={changeBorder ? styles.container : styles.textInput}
            onPress={onLikePress}
          />
          {icon && (
            <Icon
              style={styles.iconEye}
              size={25}
              color={'#C4C4C4'}
              name={icon}
              onPress={onIconclick}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#618DC9',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },

  textContainer: {
    flex: 1,
    margin: 20,
  },

  textLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#566573',
  },

  iconEye: {
    position: 'absolute',
    marginTop: 7,
    right: 10,
  },
});

export default EditTextS;
