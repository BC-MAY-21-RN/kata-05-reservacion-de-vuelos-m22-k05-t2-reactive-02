import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckSVG from '../../../assets/icons/check.svg';
import styles from './styles';
import func from './functions';

export default function Terms({text, isfirst, changeForm, term, ischecked}) {
  return (
    <View style={func.containerstyle(isfirst)}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => changeForm(!ischecked, term)}
          style={func.touchablestyle(ischecked)}>
          {ischecked ? <CheckSVG /> : null}
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
