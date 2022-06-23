import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import TextIndicator from '../src/components/atoms/TextIndicator';

describe('Tests TextIndicator component', () => {
  it('TextIndicator snapshot', () => {
    const renderTextIndicator = renderer
      .create(<TextIndicator text={''} />)
      .toJSON();
    expect(renderTextIndicator).toMatchSnapshot();
  });
});
