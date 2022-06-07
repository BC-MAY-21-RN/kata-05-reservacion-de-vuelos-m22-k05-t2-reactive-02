import React from 'react';
import {View} from 'react-native';
import Countries from '../atoms/Countries';
import FlightDetails from '../atoms/FlightDetails';

const CardFlight = () => {
  return (
    <View>
      <Countries />
      <FlightDetails />
    </View>
  );
};

export default CardFlight;
