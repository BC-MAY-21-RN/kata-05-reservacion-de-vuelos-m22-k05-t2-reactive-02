import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BottomText from '../src/components/atoms/BottomText';

describe('Tests BottomText component', () => {
  it('BottomText snapshot', () => {
    const renderBottomText = renderer
      .create(<BottomText nameScreen={''} textComponent={''} />)
      .toJSON();
    expect(renderBottomText).toMatchSnapshot();
  });
});
