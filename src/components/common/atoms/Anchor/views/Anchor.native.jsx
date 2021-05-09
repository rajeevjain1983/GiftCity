// 9fbef606107a605d69c0edbcd8029e5d 
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import {
  setTestId,
  getLocator,
  configureInternalNavigationFromCMSUrl,
  isWebViewPage,
} from '@tcp/core/src/utils';
import { StyledText } from '../../../../../../styles/globalStyles/StyledText.style';
import {
  UrlHandler,
  navigateToPage,
  validateExternalUrl,
  redirectToInAppView,
} from '../../../../../utils/index.native';
import withStyles from '../../../hoc/withStyles.native';
import { AnchorStyles, AnchorView, AnchorIcon } from '../Anchor.style.native';
import AccessibilityRoles from '../../../../../constants/AccessibilityRoles.constant';

const Icon = require('../../../../../../../mobileapp/src/assets/images/carrot-small-rights.png');

const getOverrideStyle = overrideStyle => {
  return overrideStyle && overrideStyle.color ? { style: overrideStyle } : null;
};

/**
 * @param {object} props : Props for Anchor
 * @desc This is a Anchor component to manage the internal or external .
 */
const Anchor = ({
  anchorVariation,
  text,
  visible,
  children,
  customStyle,
  locator,
  onPress,
  accessibilityLabel,
  justifyContent,
  hitSlop,
  overrideStyle = {},
  ...otherProps
}) => {
  const { url, navigation, onReuqestClose } = otherProps;
  const accessibilityRole = validateExternalUrl(url)
    ? AccessibilityRoles.Link
    : AccessibilityRoles.Button;
  const openUrl = () => {
    if (isWebViewPage(url) && navigation) {
      if (onReuqestClose) {
        onReuqestClose();
      }
      redirectToInAppView(url, navigation);
    } else if (validateExternalUrl(url)) {
      UrlHandler(url);
    } else if (navigation) {
      const cmsValidatedUrl = configureInternalNavigationFromCMSUrl(url);
      navigateToPage(cmsValidatedUrl, navigation);
    }
  };
  const styleProp = getOverrideStyle(overrideStyle);

  if (children) {
    return (
      <TouchableOpacity
        accessibilityRole={accessibilityRole}
        onPress={onPress || openUrl}
        {...otherProps}
        style={customStyle}
        {...setTestId(getLocator(locator))}
      >
        {children}
      </TouchableOpacity>
    );
  }

  if (text) {
    return (
      <AnchorView
        accessibilityRole={accessibilityRole}
        accessible
        onPress={onPress || openUrl}
        accessibilityLabel={accessibilityLabel || text}
        style={customStyle}
        justifyContent={justifyContent}
        {...setTestId(getLocator(locator))}
        hitSlop={hitSlop}
      >
        <StyledText anchorVariation={anchorVariation} {...otherProps} {...styleProp}>
          {text}
        </StyledText>
        {visible && <AnchorIcon source={Icon} />}
      </AnchorView>
    );
  }

  return null;
};

Anchor.propTypes = {
  anchorVariation: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool,
  children: PropTypes.shape({}),
  customStyle: PropTypes.shape({}),
  locator: PropTypes.string,
  onPress: PropTypes.func,
  accessibilityLabel: PropTypes.string,
  colorName: PropTypes.string,
  margins: PropTypes.string,
  justifyContent: PropTypes.string,
  hitSlop: PropTypes.shape({}),
  overrideStyle: PropTypes.shape({}),
};

Anchor.defaultProps = {
  anchorVariation: '',
  text: '',
  visible: false,
  children: null,
  customStyle: {},
  locator: '',
  onPress: null,
  accessibilityLabel: '',
  colorName: null,
  margins: null,
  justifyContent: '',
  hitSlop: {},
  overrideStyle: {},
};

export default withStyles(Anchor, AnchorStyles);
export { Anchor as AnchorVanilla };
