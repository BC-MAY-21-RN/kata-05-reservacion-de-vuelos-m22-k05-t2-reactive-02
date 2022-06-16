import React from 'react';
import {View} from 'react-native';
import Countries from '../atoms/Countries';
import FlightDetails from '../atoms/FlighDetails';

const CardFlight = ({valueFlight}) => {
  return (
    <View>
      <Countries values={valueFlight} />
      <FlightDetails values={valueFlight} />
    </View>
  );
};

export default CardFlight;
