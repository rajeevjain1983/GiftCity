// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import { SkeletonVanilla as Skeleton } from '../views/Skeleton.native';

describe('Home Skeleton Native Componenet', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Skeleton col={3} row={1} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
