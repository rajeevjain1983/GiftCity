// 9fbef606107a605d69c0edbcd8029e5d 
import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const StyledTextInput = styled(TextInput)`
  height: 150px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.FOOTER.DIVIDER};
`;

export default StyledTextInput;
