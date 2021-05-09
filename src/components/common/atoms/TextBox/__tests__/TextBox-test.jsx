// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import { TextBoxVanilla } from '../views/TextBox';

describe('Textbox component', () => {
  const props = {
    type: 'text',
    id: 'abcd',
    className: 'asdfasdf',
    meta: 'sdfdsf',
    input: { value: 'hello sonar' },
  };

  it('renders correctly', () => {
    const component = shallow(<TextBoxVanilla {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders errored state correctly', () => {
    props.meta = { touched: true, error: 'some error occurred from meta' };
    const component = shallow(<TextBoxVanilla {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders with submit errors state correctly', () => {
    props.submitErrors = 'some error occurred from submit errors';
    const component = shallow(<TextBoxVanilla {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders with explicit errors state correctly', () => {
    props.showExplicitError = 'some error occurred from show explicit error';
    const component = shallow(<TextBoxVanilla {...props} />);
    expect(component).toMatchSnapshot();
  });
});
