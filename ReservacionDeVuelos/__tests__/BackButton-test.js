import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BackButton from '../src/components/atoms/BackButton';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('Tests from BackButton component', () => {
  it('BckButton snapshot', () => {
    const renderBackButton = renderer
      .create(<BackButton key={2} navigation={null} />)
      .toJSON();
    expect(renderBackButton).toMatchSnapshot();
  });
});
