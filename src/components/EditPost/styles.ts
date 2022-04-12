import { TouchableOpacity } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler'
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin-top: 5px;
    background-color: 'rgba(52, 52, 52, 0.8)';
`;

export const ContainerPostCreation = styled.View`
    height: 360px;
    width: 100%;
    
    padding: 15px 15px;
    margin-right: 25px;
    border-width: 1px;
    border-color: #808080;
    background-color: white;
`;

export const Label = styled.Text`
    margin-top: 15px;
    margin-bottom: 5px;
    color: black;
`;

export const TitleWrap = styled.View`
    border-radius: 5px
    border-width: 1px;
    border-color: #808080;
`;

export const ContentWrap = styled.View`
    border-radius: 5px
    border-width: 1px;
    border-color: #808080;
`;


export const TitleInput = styled(TextInput)`
    padding: 0 5px;
`;

export const ContentInput = styled(TextInput)`
    padding: 0 5px;
    height: 150px;
`;

export const Footer = styled.View`
    height: 30px;
    width: 100%;
    margin-top: 5px;
`;

export const Button = styled(TouchableOpacity)`
    height: 30px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: #808080;
`;


export const ButtonText = styled.Text`
    color: black;
`;