import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import '@react-native-google-signin/google-signin';
import Buttons from '../src/components/atoms/Buttons';

jest.mock('@react-native-google-signin/google-signin', () => {});
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('Tests Buttons component', () => {
  it('Buttons snapshot', () => {
    const renderButtons = renderer
      .create(<Buttons buttonsActive={true} form={null} changeAlert={null} />)
      .toJSON();
    expect(renderButtons).toMatchSnapshot();
  });
});
