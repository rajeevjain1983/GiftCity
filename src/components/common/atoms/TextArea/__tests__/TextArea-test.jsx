// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import { TextArea } from '../views/TextArea';

describe('Textarea component', () => {
  it('renders correctly', () => {
    const props = {
      id: 'abcd',
      className: 'asdfasdf',
      meta: 'sdfdsf',
      input: { value: 'hello sonar' },
    };
    const component = shallow(<TextArea {...props} />);
    expect(component).toMatchSnapshot();
  });
});
