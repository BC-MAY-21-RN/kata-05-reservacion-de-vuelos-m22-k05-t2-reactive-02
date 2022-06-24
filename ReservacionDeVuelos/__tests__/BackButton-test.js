import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BackButton from '../src/components/atoms/BackButton';

describe('Tests from BackButton component', () => {
  it('BckButton snapshot', () => {
    const renderBackButton = renderer.create(<BackButton />).toJSON();
    expect(renderBackButton).toMatchSnapshot();
  });
});
