import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InputComponent from '../src/components/atoms/InputComponent';

describe('Tests InputComponent component', () => {
  it('InputComponent snapshot', () => {
    const renderInputComponent = renderer
      .create(
        <InputComponent
          alert={false}
          changeForm={null}
          input={'input0'}
          text={null}
          title={'prueba'}
        />,
      )
      .toJSON();
    expect(renderInputComponent).toMatchSnapshot();
  });
});
