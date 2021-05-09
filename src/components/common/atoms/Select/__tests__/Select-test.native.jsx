// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import SelectBox from '../views/Select.native';
import NativeDropDown from '../../NativeDropDown';

describe('Selectbox component', () => {
  const countryUS = 'United States';
  const displayValue = [
    {
      id: 'US',
      displayName: countryUS,
    },
    { id: 'CA', displayName: 'Canada' },
  ];

  it('renders correctly', () => {
    const props = {
      name: 'test',
      id: 'test',
      heading: 'test',
      input: {
        value: 'test',
        onChange: () => {},
      },
      options: displayValue,
    };
    const component = shallow(<SelectBox {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly for error', () => {
    const props = {
      name: 'test',
      id: 'test',
      heading: 'test',
      input: {
        value: 'test',
        onChange: () => {},
      },
      options: displayValue,
      meta: {
        touched: true,
        error: 'error message',
      },
    };
    const component = shallow(<SelectBox {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('if placeholder is present and input.value is not present then placeholder object is prepended', () => {
    const props = {
      name: 'test',
      id: 'test',
      heading: 'test',
      input: {
        value: '',
        onChange: () => {},
      },
      placeholder: 'placeholder',
      options: displayValue,
      meta: {
        touched: true,
        error: 'error message',
      },
    };
    const component = shallow(<SelectBox {...props} />);
    expect(component.find(NativeDropDown).props().data[0].displayName).toBe(props.placeholder);
  });
});
