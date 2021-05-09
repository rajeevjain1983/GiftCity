// 9fbef606107a605d69c0edbcd8029e5d 
import styled from 'styled-components';
import BodyCopy from '../BodyCopy';

export const StyledHeading = styled(BodyCopy)`
  margin-bottom: ${props => (props.isFocussed ? '0' : props.theme.spacing.ELEM_SPACING.XXS)};
  top: ${props => (props.isFocussed ? '0' : props.theme.spacing.ELEM_SPACING.MED)};
  position: absolute;
`;

export const Container = styled.View`
  position: relative;
  ${props => (props.isAddNewCC ? '' : `height: 72px`)};
`;

export default StyledHeading;
