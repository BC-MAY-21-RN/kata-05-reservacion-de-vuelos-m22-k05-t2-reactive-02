import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AddButton from '../src/components/atoms/AddButton';

describe('Tests from AddButton component', () => {
  it('AddButton snapshot test', () => {
    const renderAddButton = renderer.create(<AddButton />).toJSON();
    expect(renderAddButton).toMatchSnapshot();
  });
});
