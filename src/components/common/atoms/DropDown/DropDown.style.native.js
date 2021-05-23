// 9fbef606107a605d69c0edbcd8029e5d 
import styled, { css } from 'styled-components/native';

const getSecondaryVariation = props => {
  return `${
    props.dropDownStyle.lightBorder
      ? `border-bottom-width: ${props.dropDownStyle.border}px; border-bottom-color: ${
          props.theme.colors.FOOTER.DIVIDER
        }`
      : `border-bottom-width: ${props.dropDownStyle.border}px; border-bottom-color: ${
          props.theme.colors.BLACK
        }`
  }`;
};

const DropDownStyle = css`
  height: ${props => props.dropDownStyle.height}px;
  ${props =>
    props.variation === 'primary'
      ? `border: ${props.dropDownStyle.border}px solid ${props.theme.colors.BUTTON.WHITE.BORDER}`
      : getSecondaryVariation(props)};
  background-color: ${props =>
    props.variation === 'primary' || props.bgColor
      ? props.theme.colors.gray[500]
      : props.theme.colors.white};
  width: 100%;
`;

const HeaderContainer = styled.View`
  margin-right: ${props => props.theme.spacing.ELEM_SPACING.SM};
`;

const HeaderItemContainer = styled.View`
  width: 95%;
`;

const Row = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  ${props =>
    props.variation === 'primary' ? 'justify-content: center' : 'justify-content:space-between'};
  align-items: center;
`;

const DropDownItemContainer = styled.TouchableHighlight.attrs({
  underlayColor: props => props.theme.colors.BUTTON.WHITE.ALT_FOCUS,
})`
  padding: ${props => props.theme.spacing.ELEM_SPACING.XXXS};
  background-color: ${props => props.theme.colors.WHITE};
  justify-content: ${props => (props.variation === 'primary' ? 'flex-start' : 'center')};
`;

const Separator = styled.View`
  background-color: ${props => props.theme.colors.BUTTON.WHITE.BORDER};
  height: 1px;
`;

const FlatList = styled.FlatList`
  flex: 1;
`;

const StyledLabel = styled.Text`
  font-size: ${props =>
    !props.isFocused
      ? props.theme.typography.fontSizes.fs14
      : props.theme.typography.fontSizes.fs10};
  color: ${props => props.theme.colors.BLACK};
  font-weight: ${props =>
    !props.isFocused
      ? props.theme.typography.fontWeights.regular
      : props.theme.typography.fontWeights.extrabold};
  font-family: ${props => props.theme.typography.fonts.secondary};
`;

const SelectedLabelView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => props.theme.colors.BLACK};
`;

const SHADOW = `
  shadow-opacity: 0.15;
  shadow-radius: 2px;
  shadow-color: ${props => props.theme.colors.black};
  shadow-offset: 0px 4px;
  elevation: 2;
`;

const FlatListWrapper = styled.View`
  ${SHADOW}
  width: ${props => props.width};
  height: ${props => props.height};
  padding-right: ${props => props.theme.spacing.ELEM_SPACING.XXXS};
`;

const getAdditionalStyleWrapper = props => {
  const { height, paddingTop } = props;
  return {
    ...(height && { height }),
    ...(paddingTop && { paddingTop }),
  };
};

const TouchableOpacityWrapper = styled.TouchableOpacity`
  ${getAdditionalStyleWrapper}
  position: relative;
`;

const getAdditionalStyleOverlayWrapper = props => {
  const { left, top, width } = props;
  return {
    ...(left && { left }),
    ...(top && { top }),
    ...(width && { width }),
  };
};

const OverLayView = styled.View`
  position: absolute;
  flex-direction: row;
  border: 1px solid ${props => props.theme.colors.BUTTON.WHITE.BORDER};
  border-top-width: 1px;
  margin-top: -1px;
  ${getAdditionalStyleOverlayWrapper}
`;

export {
  DropDownStyle,
  HeaderContainer,
  Row,
  OverLayView,
  DropDownItemContainer,
  Separator,
  FlatList,
  StyledLabel,
  SelectedLabelView,
  FlatListWrapper,
  HeaderItemContainer,
  TouchableOpacityWrapper,
};
