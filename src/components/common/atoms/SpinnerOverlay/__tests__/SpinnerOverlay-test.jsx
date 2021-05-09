// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import { SpinnerOverlayVanilla } from '../views/SpinnerOverlay';

describe('SpinnerOverlay Componenet', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SpinnerOverlayVanilla col={3} className="skeleton" />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
