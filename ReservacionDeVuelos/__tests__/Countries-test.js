import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Countries from '../src/components/atoms/Countries';

describe('Tests Countries component', () => {
  it('Countries snapshot', () => {
    const renderCountries = renderer
      .create(
        <Countries
          values={{
            from: {title: 'AWS', subtitle: 'Amazon web services'},
            to: {title: 'ML', subtitle: 'Mercado Libre'},
            date: '2022-06-16',
            passengers: 5,
          }}
        />,
      )
      .toJSON();
    expect(renderCountries).toMatchSnapshot();
  });
});
