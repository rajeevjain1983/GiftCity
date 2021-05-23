// 9fbef606107a605d69c0edbcd8029e5d
import React from "react";
import withStyles from "../../../../common/hoc/withStyle";
import L1NavItem from "../molecules/L1NavItem";
import style from "../styles/navigation.style";
import L2Panel from "../molecules/L2Panel";
import SlideDrawer from "../molecules/SlideDrawer/SlideDrawer";
import BackDrop from "../molecules/SlideDrawer/BackDrop";

const Navigation = (props) => {
  const { navigationData, className, drawerOpen, backdropClickHandler } = props;

  let backdrop;
  if (drawerOpen) {
    backdrop = <BackDrop close={backdropClickHandler} />;
  }
  return (
    <React.Fragment>
      <div className={className}>
        <SlideDrawer show={drawerOpen}>
          <ul className="main-navigation" role="menubar">
            {navigationData &&
              navigationData.map((mainCategory, index) => {
                const { category: navL1Item } = mainCategory;
                const stringId = index.toString();
                return (
                  <L1NavItem
                    dataLocator={`l1menu_link_${index}`}
                    index={index}
                    key={`l1menu_link_${stringId}`}
                    {...navL1Item}
                  >
                    <L2Panel
                      panelData={navL1Item.subCategories}
                      name={navL1Item.displayName}
                      l1Id={navL1Item.name}
                      className="nav-bar-l2"
                      l1Index={index}
                    />
                  </L1NavItem>
                );
              })}
          </ul>
        </SlideDrawer>
        {backdrop}
      </div>
    </React.Fragment>
  );
};

export default withStyles(Navigation, style);
