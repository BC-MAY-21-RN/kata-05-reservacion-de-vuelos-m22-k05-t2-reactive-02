import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FlighDetails from '../src/components/atoms/FlighDetails';

describe('Tests FlighDetails component', () => {
  it('FlighDetails snapshot', () => {
    const renderFlighDetails = renderer
      .create(
        <FlighDetails
          values={{
            from: {title: 'AWS', subtitle: 'Amazon web services'},
            to: {title: 'ML', subtitle: 'Mercado Libre'},
            date: '2022-06-16',
            passengers: 5,
          }}
        />,
      )
      .toJSON();
    expect(renderFlighDetails).toMatchSnapshot();
  });
});
