import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;

    background-color: #374151;
    justify-content: center;
    border-radius: 5px;

`;

export const Title = styled.Text`
    color: white;
    text-align: center;
    justify-content: center;
`;