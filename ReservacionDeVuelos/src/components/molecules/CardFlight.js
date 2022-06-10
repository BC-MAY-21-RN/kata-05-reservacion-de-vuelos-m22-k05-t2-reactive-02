import React from 'react';
import {View} from 'react-native';
import Countries from '../atoms/Countries';
import FlightDetails from '../atoms/FlighDetails';

const CardFlight = () => {
  return (
    <View>
      <Countries />
      <FlightDetails />
    </View>
  );
};

export default CardFlight;
