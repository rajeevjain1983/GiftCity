// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import { DrawerVanilla as Drawer } from '../Drawer';

let DrawerComp;
beforeEach(() => {
  DrawerComp = shallow(
    <Drawer
      mobile
      tablet
      open
      navigationLevel="l1"
      width={{
        small: '314px',
        medium: '314px',
        large: '100%',
      }}
    >
      Renders correctly
    </Drawer>
  );
});

describe('Drawer component', () => {
  it('renders correctly', () => {
    expect(DrawerComp).toMatchSnapshot();
  });

  it('handleUserName should return the user name', () => {
    const instance = DrawerComp.instance();
    expect(instance.handleUserName('test')).toEqual('test');
  });
  it('handleUserRewards should get called', () => {
    const instance = DrawerComp.instance();
    expect(instance.handleUserRewards(1)).toEqual(1);
  });
  it('handleUserRewards should get called', () => {
    const shallowDrawerComp = shallow(
      <Drawer
        mobile
        tablet
        open={false}
        width={{
          small: '314px',
          medium: '314px',
          large: '100%',
        }}
      >
        Renders correctly
      </Drawer>
    );
    const instance = shallowDrawerComp.instance();
    expect(instance.init()).toBeNull();
  });
});
