import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps extends TouchableOpacityProps {
    isGreyOutVisible?: boolean
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
    height: 30px;
    border-radius: 5px;
    border-color: black ;

    justify-content: center;
    align-items: center;

    ${({ isGreyOutVisible }) => !isGreyOutVisible ? css` background-color: black` : css` background-color: #DCDCDC`}
`;

export const ButtonText = styled(Text)<ContainerProps>`
    ${({ isGreyOutVisible }) => isGreyOutVisible ? css` color: #A9A9A9` : css` color: #FFF`}
`;