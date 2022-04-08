import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: black;
`;

export const Header = styled.View`
  height: 45%;

  justify-content: flex-end;

  padding-right: 6px;
  padding-left: 6px;
`;

export const WelcomeText = styled.Text`
  color: rgb(118, 149, 236);
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  
`;

export const Content = styled.View`
  height: 55%;
  margin: 20px;
`;

export const UsernameForm = styled.View`
  height: 50px;  
`;

export const ButtonWrapper = styled.View`
  height: 50px;
  width: 100%;

  margin-top: 20px;
`;

export const Footer = styled.View`

`;
