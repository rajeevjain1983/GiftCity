// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import { CustomButtonVanilla } from '../views/Button.native';
import { TouchableOpacityComponent } from '../Button.style.native';

describe('CustomButton', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CustomButtonVanilla />);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should return styled TouchableOpacityComponent component value one', () => {
    expect(component.find(TouchableOpacityComponent)).toHaveLength(1);
  });
});
