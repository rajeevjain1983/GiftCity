// 9fbef606107a605d69c0edbcd8029e5d 
import { css } from 'styled-components';

const textareaStyles = css`
  .TextArea__error {
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
`;
export default textareaStyles;
