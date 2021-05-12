// 9fbef606107a605d69c0edbcd8029e5d 
import styled from 'styled-components/native';

import {
  typography as typographyStyleSystem,
  color as colorStyleSystem,
} from '@tcp/core/styles/rwdStyleSystem';

import {
  androidFontStyles,
  iosFontStyles,
} from '../../../../../styles/globalStyles/StyledText.style';

const getAdditionalStyle = props => {
  const { margin, textDecoration } = props;
  return {
    ...(margin && { margin }),
    ...(textDecoration && { 'text-decoration-line': textDecoration }),
  };
};

const BodyCopyText = styled.Text`
  ${typographyStyleSystem}
  ${colorStyleSystem}
  ${androidFontStyles}
  ${iosFontStyles}
  ${getAdditionalStyle}
`;
export default BodyCopyText;
