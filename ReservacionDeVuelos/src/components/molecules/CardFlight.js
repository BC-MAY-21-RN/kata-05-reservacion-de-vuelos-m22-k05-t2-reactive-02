import React from 'react';
import {View} from 'react-native';
import Countries from '../atoms/Countries';
import FlightDetails from '../atoms/FlighDetails';

const CardFlight = ({data}) => {
  return (
    <View>
      <Countries data={data} />
      <FlightDetails data={data} />
    </View>
  );
};

export default CardFlight;
