import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Countries from '../src/components/atoms/Countries';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('Tests Countries component', () => {
  it('Countries snapshot', () => {
    const renderCountries = renderer.create(<Countries data={{}} />).toJSON();
    expect(renderCountries).toMatchSnapshot();
  });
});
