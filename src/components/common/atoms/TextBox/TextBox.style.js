// 9fbef606107a605d69c0edbcd8029e5d 
import { css } from 'styled-components';

const textboxStyles = css`
  position: relative;
  display: block;

  .TextBox__label {
    font-size: ${props =>
      props.input && props.input.value
        ? props.theme.fonts.fontSize.body.small.primary
        : props.theme.fonts.fontSize.textbox}px;
    padding: 0;
    position: absolute;
    top: ${props =>
      props.input && props.input.value
        ? props.theme.spacing.ELEM_SPACING.XXS
        : props.theme.spacing.ELEM_SPACING.LRG};
    ${props =>
      props.input &&
      props.input.value &&
      `
      font-weight: ${props.theme.fonts.fontWeight.bold};
    `}
  }
  .TextBox__view {
    font-size: 16px;
    position: absolute;
    top: 10px;
    padding: 5px;
    color: ${props => props.theme.colors.TEXTBOX.COLOR};
  }
  .TextBox__input {
    margin: 0;
    outline: 0;
    font-size: ${props => props.theme.fonts.fontSize.textbox_input}px;
    color: ${props => props.theme.colors.TEXTBOX.COLOR};
    width: 100%;
    background-position: left top;
    background-repeat: no-repeat;
    background-size: contain;
    border: 0 solid transparent;
    border-bottom: 1px solid ${props => props.theme.colors.FOOTER.DIVIDER};
    padding-bottom: ${props => props.theme.spacing.ELEM_SPACING.XS};
    margin-bottom: ${props => props.theme.spacing.ELEM_SPACING.XS};
    padding-top: ${props => props.theme.spacing.ELEM_SPACING.LRG};

    ${props =>
      props.meta &&
      props.meta.touched &&
      props.meta.error &&
      `
      border-bottom: 1px solid ${props.theme.colors.NOTIFICATION.ERROR};
    `}

    ${props =>
      props.disabled
        ? `
      background-color: ${props.theme.fieldBackgroundDisabledColor};
      border-color: ${props.theme.fieldBorderDisabledColor};
    `
        : ''};

    &:focus + .TextBox__label {
      font-size: ${props => props.theme.fonts.fontSize.body.small.primary}px;
      font-weight: ${props => props.theme.fonts.fontWeight.bold};
      top: ${props => props.theme.spacing.ELEM_SPACING.XXS};
    }
  }
  .success__checkmark {
    display: none;
  }
  &.textbox_validation_success .TextBox__input {
    border-bottom: 1px solid ${props => props.theme.colors.success};
  }

  &.textbox_validation_success .success__checkmark {
    display: ${props => (props.input && props.type === 'hidden' ? 'none' : 'block')};
    width: 15px;
    height: 8px;
    margin-left: ${props => props.theme.spacing.ELEM_SPACING.XXXS};
    transform: rotate(-45deg);
    transform-origin: left;
    position: absolute;
    right: ${props => (props.checkMarkRightMargin ? props.checkMarkRightMargin : 0)};
    top: 30px;

    &:before {
      content: '';
      position: absolute;
      width: 3px;
      height: 100%;
      background-color: ${props => props.theme.colors.TEXTBOX.SUCCESS_BORDER};
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${props => props.theme.colors.TEXTBOX.SUCCESS_BORDER};
      bottom: 0;
    }
  }

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};

  .TextBox__error {
    display: flex;
    flex-direction: row;
    padding-bottom: ${props => props.theme.spacing.ELEM_SPACING.XXS};
  }
  .warning-icon {
    /* background: transparent url(${getIconPath('circle-alert-fill')}) no-repeat 0 0; */
    background-size: contain;
    border: none;
    height: 14px;
    width: 16px;
    margin-right: 7px;
    flex-shrink: 0;
  }

  .TextBox_view {
    border: 1px solid gray;
    border-radius: 4px;
    height: 140px;
    width: 100%;
    margin-bottom: 10px;
  }
  .TextBox_view_border {
    border: 1px solid red;
    border-radius: 4px;
    height: 140px;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default textboxStyles;
