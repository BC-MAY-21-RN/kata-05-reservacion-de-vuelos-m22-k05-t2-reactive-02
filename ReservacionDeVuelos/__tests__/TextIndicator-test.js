import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TextIndicator from '../src/components/atoms/TextIndicator';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('Tests TextIndicator component', () => {
  it('TextIndicator snapshot', () => {
    const renderTextIndicator = renderer
      .create(<TextIndicator text={''} style={{}} />)
      .toJSON();
    expect(renderTextIndicator).toMatchSnapshot();
  });
});
