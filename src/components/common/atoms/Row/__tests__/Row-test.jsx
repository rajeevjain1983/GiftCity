// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import { RowVanilla } from '../views/Row';

describe('Row component', () => {
  it('renders correctly', () => {
    const props = {
      className: 'sample-row',
    };
    const component = shallow(<RowVanilla {...props}>ABCD</RowVanilla>);
    expect(component).toMatchSnapshot();
    expect(component.find('.sample-row')).toHaveLength(1);
  });
});
