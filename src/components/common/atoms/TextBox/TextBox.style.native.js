// 9fbef606107a605d69c0edbcd8029e5d 
import styled, { css } from 'styled-components/native';

const StyledTextBoxWrapper = styled.View`
  margin-bottom: ${props => (props.marginBottom ? props.theme.spacing.ELEM_SPACING.XL : 0)};
`;

const getInputBottomColor = props => {
  const { theme, meta } = props;
  const { colorPalette } = theme;
  const { dirty, error } = meta;
  const borderColor = dirty && error !== undefined ? colorPalette.error : colorPalette.gray[1500];
  return `
  border-bottom-color: ${borderColor};
  `;
};

const TextBoxStyle = css`
  ${getInputBottomColor};
`;

const StyledTextBox = styled.TextInput`
  border-bottom-width: 1px;
  height: ${props => (props.isCVVField ? '28px' : '40px')};
  padding-top: ${props => (props.isCVVField ? '0' : props.theme.spacing.ELEM_SPACING.MED)};
  padding-bottom: 0;
  padding-left: 0;
  font-family: ${props => props.theme.typography.fonts.secondary};
  font-weight: ${props => props.theme.typography.fontWeights.regular};
  border-bottom-color: ${props =>
    props.meta.touched && props.meta.error
      ? props.theme.colorPalette.error
      : props.theme.colorPalette.gray[600]};
  color: ${props => props.theme.colorPalette.gray[900]};
`;

const StyledLabel = styled.Text`
  position: absolute;
  left: 0;
  top: ${props => (!props.isFocused ? props.theme.spacing.ELEM_SPACING.MED : '0')};
  font-family: ${props => props.theme.typography.fonts.secondary};
  font-size: ${props =>
    !props.isFocused
      ? props.theme.typography.fontSizes.fs14
      : props.theme.typography.fontSizes.fs10};
  color: #1a1a1a;
  font-weight: ${props =>
    !props.isFocused
      ? props.theme.typography.fontWeights.regular
      : props.theme.typography.fontWeights.extrabold};
  margin-bottom: ${props => (props.isFocused ? props.theme.spacing.ELEM_SPACING.XXS : '0')};
`;

const StyledErrorIcon = styled.View`
  margin-right: ${props => props.theme.spacing.ELEM_SPACING.XS};
`;

const StyledSuccessCheck = styled.View`
  margin-right: ${props => props.theme.spacing.ELEM_SPACING.XXS};
`;

const StyledErrorWrapper = styled.View`
  margin-top: ${props => props.theme.spacing.ELEM_SPACING.SM};
  display: flex;
  flex-direction: row;
  align-items: ${props => (props.isCVVFieldError ? 'stretch' : 'center')};
  width: 90%;
  ${props => (props.errorStyle ? props.errorStyle : '')}
`;

const StyledSuccessIcon = styled.View`
  position: absolute;
  right: 0;
  top: ${props => props.theme.spacing.ELEM_SPACING.LRG};
`;

const HiddenView = styled.View`
  display: none;
`;

export {
  TextBoxStyle,
  StyledTextBox,
  StyledLabel,
  StyledErrorIcon,
  StyledErrorWrapper,
  StyledTextBoxWrapper,
  StyledSuccessIcon,
  HiddenView,
  StyledSuccessCheck,
};
