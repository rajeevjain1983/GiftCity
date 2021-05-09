// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import PropTypes from 'prop-types';
import CustomIcon from '@tcp/core/src/components/common/atoms/Icon';
import { ICON_NAME } from '@tcp/core/src/components/common/atoms/Icon/Icon.constants';
import {
  UrlHandler,
  navigateToPage,
  validateExternalUrl,
  redirectToInAppView,
} from '../../../../../utils/utils.app';
import withStyles from '../../../hoc/withStyles.native';
import {
  style,
  CustomStyleText,
  TouchableOpacityComponent,
  IconContainer,
} from '../Button.style.native';
import {
  getLocator,
  configureInternalNavigationFromCMSUrl,
  isWebViewPage,
} from '../../../../../utils';

const IconComp = values => {
  const {
    showIcon,
    iconName,
    selectedIcon,
    iconColor,
    iconSize,
    selected,
    buttonVariation,
    iconRight,
    customIconStyle,
  } = values;
  if (showIcon) {
    return (
      <IconContainer
        style={customIconStyle}
        buttonVariation={buttonVariation}
        iconRight={iconRight}
      >
        <CustomIcon name={selected ? selectedIcon : iconName} size={iconSize} color={iconColor} />
      </IconContainer>
    );
  }

  return null;
};

const CustomButton = props => {
  const {
    locator,
    text,
    buttonVariation,
    fullWidth,
    customStyle,
    disableButton,
    color,
    fill,
    onPress,
    active,
    selected,
    customTextStyle,
    paddings,
    withNoLineHeight,
    iconFirst,
    fontSize,
    fontWeight,
    fontFamily,
    customBorderStyle,
    useCustomFontStyle,
    ...otherProps
  } = props;
  const textValue = text || '';
  const { url, navigation } = otherProps;
  const openUrl = () => {
    if (isWebViewPage(url) && navigation) {
      redirectToInAppView(url, navigation);
    } else if (validateExternalUrl(url)) {
      UrlHandler(url);
    } else {
      const cmsValidatedUrl = configureInternalNavigationFromCMSUrl(url);
      navigateToPage(cmsValidatedUrl, navigation);
    }
  };
  return (
    <TouchableOpacityComponent
      accessibilityRole="button"
      style={customStyle}
      disabled={disableButton}
      onPress={onPress || openUrl}
      testID={getLocator(locator)}
      {...otherProps}
    >
      {iconFirst ? IconComp(props) : null}
      <CustomStyleText
        fullWidth={fullWidth}
        buttonVariation={buttonVariation}
        color={color}
        fill={fill}
        disableButton={disableButton}
        customBorderStyle={customBorderStyle}
        active={active}
        selected={selected}
        style={customTextStyle}
        paddings={paddings}
        withNoLineHeight={withNoLineHeight}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        useCustomFontStyle={useCustomFontStyle}
      >
        {textValue}
      </CustomStyleText>
      {!iconFirst ? IconComp(props) : null}
    </TouchableOpacityComponent>
  );
};

CustomButton.propTypes = {
  buttonVariation: PropTypes.string,
  fullWidth: PropTypes.string,
  customStyle: PropTypes.shape({}),
  text: PropTypes.string,
  url: PropTypes.string,
  disableButton: PropTypes.bool,
  locator: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  fill: PropTypes.string,
  active: PropTypes.bool,
  navigation: PropTypes.shape({}),
  selected: PropTypes.bool,
  theme: PropTypes.shape({}),
  showIcon: PropTypes.bool,
  selectedIcon: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  withNoLineHeight: PropTypes.bool,
  customTextStyle: PropTypes.shape({}),
  paddings: PropTypes.string,
  iconFirst: PropTypes.bool,
  customIconStyle: PropTypes.shape({}),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  customBorderStyle: PropTypes.string,
  useCustomFontStyle: PropTypes.bool,
};

CustomButton.defaultProps = {
  fullWidth: '',
  buttonVariation: 'fixed-width',
  customStyle: {},
  text: '',
  url: '',
  disableButton: false,
  locator: '',
  color: '',
  onPress: null,
  fill: '',
  active: false,
  navigation: {},
  selected: false,
  theme: {},
  iconName: ICON_NAME.chevronDown,
  iconColor: 'gray.800',
  iconSize: 'fs12',
  showIcon: false,
  selectedIcon: ICON_NAME.chevronUp,
  customTextStyle: null,
  paddings: '12px 32px 12px 32px',
  withNoLineHeight: false,
  iconFirst: false,
  customIconStyle: {},
  fontSize: '',
  fontWeight: '',
  fontFamily: '',
  customBorderStyle: '',
  useCustomFontStyle: false,
};

export default withStyles(CustomButton, style);
export { CustomButton as CustomButtonVanilla };
