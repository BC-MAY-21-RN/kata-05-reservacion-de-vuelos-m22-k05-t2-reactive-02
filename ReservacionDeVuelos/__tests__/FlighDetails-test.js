import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FlighDetails from '../src/components/atoms/FlighDetails';

describe('Tests FlighDetails component', () => {
  it('FlighDetails snapshot', () => {
    const renderFlighDetails = renderer
      .create(<FlighDetails data={{passengers: 4, fecha: '2022-05-20'}} />)
      .toJSON();
    expect(renderFlighDetails).toMatchSnapshot();
  });
});
