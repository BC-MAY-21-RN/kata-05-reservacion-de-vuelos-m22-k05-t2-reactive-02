import React from 'react';
import {View} from 'react-native';
import Countries from '../atoms/Countries';
import FlightDetails from '../atoms/FlighDetails';

const CardFlight = ({
  avDestino,
  avOrigen,
  destino,
  origen,
  fecha,
  passengers,
}) => {
  return (
    <View>
      <Countries
        avDestino={avDestino}
        avOrigen={avOrigen}
        destino={destino}
        origen={origen}
      />
      <FlightDetails fecha={fecha} passengers={passengers} />
    </View>
  );
};

export default CardFlight;
