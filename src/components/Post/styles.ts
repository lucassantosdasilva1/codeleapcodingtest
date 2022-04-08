import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons/';
import { FontAwesome5 } from '@expo/vector-icons/';

export const Container = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: #808080;
  margin-bottom: 20px;

`;

export const HeaderPost = styled.View`
    height: 50px;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 6px;
    
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    background-color: black;
`;

export const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 15px;
`;

export const PostManagement = styled.View`
    width: 15%;

    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    
    margin-right: 15px;
`;

export const Button = styled(BorderlessButton)`

`;

export const TrashIcon = styled(Ionicons)`

`;

export const EditIcon = styled(FontAwesome5)`

`;

export const ContentPostWrap = styled.View`
    width: 100%;
    padding: 15px;
`;

export const HeaderContentPost = styled.View`
    width: 100%;
    height: 20px;
    margin-bottom: 15px;

    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const Username = styled.Text`
    color: #808080;
`;

export const PostDate = styled.Text`
    color: #808080;
`;

export const ContentPost = styled.Text`
    color: black;
`;
