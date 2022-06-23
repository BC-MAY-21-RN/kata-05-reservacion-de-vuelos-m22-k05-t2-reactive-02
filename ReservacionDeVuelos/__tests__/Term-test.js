import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Terms from '../src/components/atoms/Term';

describe('Tests Terms component', () => {
  it('Terms snapshot', () => {
    const renderTerms = renderer
      .create(
        <Terms
          changeForm={null}
          ischecked={false}
          isfirst={false}
          term={''}
          text={''}
        />,
      )
      .toJSON();
    expect(renderTerms).toMatchSnapshot();
  });
});
