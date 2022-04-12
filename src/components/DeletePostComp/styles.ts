import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 0 15px;

  justify-content: center;
  align-items:center;

  background-color: 'rgba(52, 52, 52, 0.8)';
`;

export const ModalContainer = styled.View`
  justify-content: space-between;

  height: 120px;
  width: 100%;

  padding: 15px;

  border-width: 1px;
  border-radius: 5px;
  border-color: #808080;

  background-color: white;
`;
export const QuestionContainer = styled.View`
    
`;

export const ConfirmDelete = styled.Text`
    
`;

export const ButtonContainer = styled.View`

  flex-direction: row;
  justify-content: flex-end;
`;

export const YesButton = styled(TouchableOpacity)`
  height: 30px;
  width: 80px;

  align-items: center;
  justify-content: center;

  background-color: red;
  background-color: #F6F6F6;
  border-width: 1px;

  margin-right: 15px;
`;

export const YesText = styled.Text`

`;

export const NoButton = styled(TouchableOpacity)`
  height: 30px;
  width: 80px;

  align-items: center;
  justify-content: center;

  background-color: #000000;
  border-width: 1px;

  margin-right: 15px;
`;

export const NoText = styled.Text`
  color: #FFF;
`;