// 9fbef606107a605d69c0edbcd8029e5d
import React from "react";
import withStyles from "../../../../common/hoc/withStyle";
import L1NavItem from "../molecules/L1NavItem";
import style from "../styles/navigation.style";
import L2Panel from "../molecules/L2Panel";

const Navigation = (props) => {
  const {
    navigationData,
    className,
    openL2Drawer,
    hideL2Drawer,
    openL3Drawer,
    hideL3Drawer,
    l3Drawer,
    removeL1Focus,
    accessibilityLabels,
    closeNav,
    trackNavigation,
    isShopBySizeAbTestOff,
    disableBabyL2Nesting,
  } = props;
  console.log(" Navigation...", navigationData);
  return (
    <React.Fragment>
      <div className={className}>
        <ul className="main-navigation" role="menubar">
          {navigationData &&
            navigationData.map((mainCategory, index) => {
              const { category: navL1Item } = mainCategory;

              const stringId = index.toString();
              // let categoryLayout = [];
              // let size = '';
              // const settings = {};
              // const stringId = index.toString();
              // if (navL1Item.categoryContent.mainCategory) {
              //   const { mainCategory } = navL1Item.categoryContent;
              //   const { categoryLayout: catLayout, sizesRange, set } = mainCategory;
              //   categoryLayout = catLayout;
              //   const range = sizesRange && sizesRange[0];
              //   size = range && range.text;
              //   if (set) {
              //     set.forEach(({ key, val }) => {
              //       settings[key] = val;
              //     });
              //   }
              // }
              // let topNavigationAnalyticsData;
              // if (isClient()) {
              //   topNavigationAnalyticsData = getViewportInfo().isDesktop
              //     ? `topmenu- ${navL1Item.categoryContent.name.toLowerCase()}`
              //     : `hamburger- ${navL1Item.categoryContent.name.toLowerCase()}`;
              // }
              return (
                <L1NavItem
                  dataLocator={`l1menu_link_${index}`}
                  index={index}
                  key={`l1menu_link_${stringId}`}
                  onClick={() => {
                    openL2Drawer(`l2-drawer-${stringId}`)();
                    const drawerElement =
                      document.getElementById("tcp-nav-drawer");
                    if (drawerElement) {
                      drawerElement.scrollTop = 0;
                    }
                  }}
                  // showOnlyOnApp={typeof settings.showOnlyOnApp !== 'undefined'}
                  removeL1Focus={removeL1Focus}
                  trackNavigation={trackNavigation}
                  {...navL1Item}
                >
                  <L2Panel
                    panelData={navL1Item.subCategories}
                    name={navL1Item.displayName}
                    l1Id={navL1Item.name}
                    // hideL2Drawer={hideL2Drawer(`l2-drawer-${stringId}`)}
                    className="nav-bar-l2"
                    l1Index={index}
                    // openL3Drawer={openL3Drawer}
                    // hideL3Drawer={hideL3Drawer}
                    // l3Drawer={l3Drawer}
                    // accessibilityLabels={accessibilityLabels}
                    // closeNav={closeNav}
                    // trackNavigation={trackNavigation}
                    isShopBySizeAbTestOff={isShopBySizeAbTestOff}
                    disableBabyL2Nesting={disableBabyL2Nesting}
                  />
                </L1NavItem>
              );
            })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default withStyles(Navigation, style);
