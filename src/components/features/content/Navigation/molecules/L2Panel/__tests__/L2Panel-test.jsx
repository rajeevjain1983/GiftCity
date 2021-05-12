// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import mock from '@tcp/core/src/services/abstractors/bootstrap/navigation/mock';
import Abstractor from '@tcp/core/src/services/abstractors/bootstrap/navigation';
import { shallow } from 'enzyme';
import { L2PanelVanilla as L2Panel } from '../L2Panel';

const navData = Abstractor.processData(mock.data.navigation);

const data = {
  categoryLayout: navData[0].categoryContent.mainCategory.categoryLayout,
  order: Object.keys(navData[0].subCategories),
  panelData: navData[0].subCategories,
  name: navData[0].categoryContent,
  hideL2Drawer: () => {},
  hideL3Drawer: () => {},
  accessibilityLabels: { previousButton: 'Previous' },
  className: 'nav-bar-l2',
  openL3Drawer: () => {},
};

describe('L2 Panel component', () => {
  it('renders correctly', () => {
    const L1NavItemComp = shallow(<L2Panel {...data} />);

    expect(L1NavItemComp).toMatchSnapshot();
  });

  it('has nav bar loaded', () => {
    const L1NavItemComp = shallow(<L2Panel {...data} />, { context: 'handler' }).dive();
    expect(L1NavItemComp.find('.nav-bar-l2')).toHaveLength(1);
  });
});

const dataNestedL2 = {
  categoryLayout: navData[0].categoryContent.mainCategory.categoryLayout,
  order: Object.keys(navData[0].subCategories),
  panelData: navData[0].subCategories,
  name: navData[0].categoryContent,
  hideL2Drawer: () => {},
  hideL3Drawer: () => {},
  accessibilityLabels: { previousButton: 'Previous' },
  className: 'nav-bar-l2',
  openL3Drawer: () => {},
  disableBabyL2Nesting: false,
  getViewportInfo: () => {
    return {
      isDesktop: true,
    };
  },
  l1Id: '47504',
};

describe('L2 Panel component with nested category', () => {
  it('renders correctly', () => {
    const L2NavItemComp = shallow(<L2Panel {...dataNestedL2} />);

    expect(L2NavItemComp).toMatchSnapshot();
  });

  it('has nav bar loaded', () => {
    const L1NavItemComp = shallow(<L2Panel {...dataNestedL2} />, { context: 'handler' }).dive();
    expect(L1NavItemComp.find('.nav-bar-l2')).toHaveLength(1);
  });

  it('has nav bar groups', () => {
    const L1NavItemComp = shallow(<L2Panel {...dataNestedL2} />, { context: 'handler' }).dive();
    expect(L1NavItemComp.find('.group-link')).toHaveLength(2);
  });

  it('has nav bar group click triggers list of L2', () => {
    const setNestedL2Group = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(nestedL2Group => [nestedL2Group, setNestedL2Group]);

    const L1NavItemComp = shallow(<L2Panel {...dataNestedL2} />, { context: 'handler' }).dive();
    L1NavItemComp.find('.group-link')
      .at(1)
      .simulate('click', { preventDefault: jest.fn() });
    setTimeout(() => {
      expect(setNestedL2Group).toHaveBeenCalledWith('Clothing');
    });
  });
});
