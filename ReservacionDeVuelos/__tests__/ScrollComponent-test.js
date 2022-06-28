import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ScrollComponent from '../src/components/atoms/ScrollComponent';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('Tests ScrollComponent component', () => {
  it('ScrollComponent snapshot', () => {
    const renderScrollComponent = renderer
      .create(
        <ScrollComponent
          changeNumber={null}
          changeScroll={null}
          number={0}
          scroll={0}
        />,
      )
      .toJSON();
    expect(renderScrollComponent).toMatchSnapshot();
  });
});
