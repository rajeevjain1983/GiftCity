// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import { shallow } from 'enzyme';
import { getViewportInfo } from '@tcp/core/src/utils';
import { BodyCopy } from '@tcp/core/src/components/common/atoms';
import { DELAY_TO_OPEN } from '../L1NavItem.config';
import { L1NavItemVanilla as L1NavItem } from '../L1NavItem';

jest.mock('@tcp/core/src/utils', () => {
  const originalModule = jest.requireActual('@tcp/core/src/utils');
  return {
    ...originalModule,
    getViewportInfo: jest.fn(),
  };
});

const data1 = {
  categoryContent: {
    name: '',
    description: '',
    seoToken: '',
    mainCategory: {
      promoBadge: [
        {
          text: '30% off shoes',
          style: 'style1',
        },
      ],
    },
    dataLocator: 'dataLocator',
  },
};

const data2 = {
  categoryContent: {
    name: 'Girl',
    seoToken: '',
    description: 'Sizes 4-14',
    mainCategory: {
      promoBadge: '',
    },
  },
};

describe('Drawer component', () => {
  it('renders correctly', () => {
    const L1NavItemComp = shallow(<L1NavItem {...data1} />);

    expect(L1NavItemComp).toMatchSnapshot();
  });

  it('has description loaded', () => {
    const L1NavItemComp = shallow(<L1NavItem {...data2} />);

    expect(L1NavItemComp.find('.nav-bar-item-label')).toHaveLength(1);
  });

  it('set hovered state to true on mouseenter', () => {
    getViewportInfo.mockImplementation(() => ({ isDesktop: true }));

    const L1NavItemComp = shallow(<L1NavItem {...data2} />);
    L1NavItemComp.find(BodyCopy).simulate('mouseEnter', {
      preventDefault: () => {},
      stopPropagation: () => {},
    });
    setTimeout(() => {
      expect(L1NavItemComp.state('hovered')).toBe(true);
    }, DELAY_TO_OPEN);
  });

  it('set hovered state to true on mouseleave', () => {
    getViewportInfo.mockImplementation(() => ({ isDesktop: true }));

    const L1NavItemComp = shallow(<L1NavItem {...data2} />);
    L1NavItemComp.find(BodyCopy).simulate('mouseLeave');

    expect(L1NavItemComp.state('hovered')).toBe(false);
  });
});
