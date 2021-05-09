// 9fbef606107a605d69c0edbcd8029e5d 
import styled from 'styled-components';
import { Dimensions } from 'react-native';

const winHeight = Dimensions.get('window').height;

const SpinnerWrapper = styled.View`
  height: ${winHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
`;

export const MainView = styled.View`
  border-radius: 4px;
  background-color: ${props =>
    props.theme.isGymboree
      ? props.theme.colorPalette.orange[800]
      : props.theme.colorPalette.blue[500]};
`;

export default SpinnerWrapper;
