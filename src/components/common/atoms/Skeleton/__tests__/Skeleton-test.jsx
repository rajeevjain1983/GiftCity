// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import { SkeletonVanilla as Skeleton } from '../views/Skeleton';

describe('Home Skeleton Componenet', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(<Skeleton col={3} className="skeleton" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with arrows', () => {
    const labels = {
      accessibility: {
        ariaPrevious: 'Prev',
        ariaNext: 'Next',
      },
    };
    wrapper = shallow(<Skeleton col={3} className="skeleton" showArrows labels={labels} />);
    expect(wrapper).toMatchSnapshot();
  });
});
