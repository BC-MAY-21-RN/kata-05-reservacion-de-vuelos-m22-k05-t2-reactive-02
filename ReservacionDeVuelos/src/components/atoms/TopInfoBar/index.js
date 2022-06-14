import React from 'react';
import {View, Text} from 'react-native';
import AirPlaneSVG from '../../assets/icons/airplane.svg';
import styles from './styles';

const TextsComponent = ({title, subtitle, isleft}) => {
  return (
    <View
      style={{...{position: 'absolute'}, ...(isleft ? {left: 0} : {right: 0})}}>
      <Text
        style={{
          ...{fontSize: 24, color: '#000000'},
          ...(isleft ? {textAlign: 'left'} : {textAlign: 'right'}),
        }}>
        {title}
      </Text>
      <Text
        style={{
          ...{fontSize: 14, color: '#2E2F3070'},
          ...(isleft ? {textAlign: 'left'} : {textAlign: 'right'}),
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

export default function TopInfoBar({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.viewinfo}>
        <View style={styles.row}>
          <TextsComponent
            title={item.from.title}
            subtitle={item.from.subtitle}
            isleft={true}
          />
          <AirPlaneSVG />
          <TextsComponent
            title={item.to.title}
            subtitle={item.to.subtitle}
            isleft={false}
          />
        </View>
      </View>
      <Text style={styles.text}>{item.date}</Text>
    </View>
  );
}
