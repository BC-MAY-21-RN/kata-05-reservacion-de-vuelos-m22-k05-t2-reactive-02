import React from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const EditTextS = ({label="", place="", security=false, value="", setValue=null, icon, onIconclick }) => {

  const changeText = text => setValue(text);

  return (
    <View style={styles.row}>  
        
        <View style={styles.textContainer}>
            
            <Text style={styles.textLabel}>
                {label}
            </Text>  
            <View>
              <TextInput
              type="Text"
              placeholder={place}
              style={styles.textInput}
              secureTextEntry={security}
              value={value}
              onChangeText={changeText}
              placeholderTextColor={'#808B96'}
              />
              
            </View>
            
              
        </View>
        {icon && <Icon 
                style={styles.iconEye}
                size={26} 
                color={'#2f8f94'}
                name={icon}
                onPress={onIconclick}    
              />
              }
        
    </View>
    )
    
};

const styles = StyleSheet.create({
  row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  },

  textInput: {
    borderColor: '#000000',
    borderWidth: 2,
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
    position: 'relative',
    marginTop: 30,
    fontSize: 20,
  },
})


export default EditTextS;








