import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import functions from './functions';

const texts = [Text, Text];
const views = [View, View];

const Countries = ({data}) => {
  return (
    <View style={styles.container}>
      <Icon name="airplane" style={styles.plane} />
      {views.map((Component, index) => (
        <Component
          style={styles.line}
          children={texts.map((TextComponent, index2) => (
            <TextComponent
              style={index === 0 ? styles.abbreviation : styles.country}>
              {functions.getText(data, index, index2)}
            </TextComponent>
          ))}
        />
      ))}
    </View>
  );
};

export default Countries;
