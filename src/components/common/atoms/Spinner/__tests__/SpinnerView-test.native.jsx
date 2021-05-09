// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { Animated } from 'react-native';
import { shallow } from 'enzyme';
import { SpinnerViewVanilla } from '../views/Spinner.native';

describe('SpinnerView Native Componenet', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SpinnerViewVanilla />);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should return Animated component value four', () => {
    expect(component.find(Animated)).toHaveLength(0);
  });

  it('should return Styled(View) component value one', () => {
    expect(component.find('Styled(View)')).toHaveLength(1);
  });
});
