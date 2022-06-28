import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BottomButton from '../src/components/atoms/BottomButton';

describe('Tests BottomButton component', () => {
  it('BottomButton snapshot', () => {
    const renderBottomButton = renderer
      .create(
        <BottomButton
          active={false}
          navigation={false}
          screenName={''}
          text={''}
          values={''}
        />,
      )
      .toJSON();
    expect(renderBottomButton).toMatchSnapshot();
  });
});
