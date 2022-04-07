import React from 'react';

import {
  Container,
  Header,
  WelcomeText,
  Content,
  UsernameForm,
  Footer,
} from './styles';

export function Signup() {
  return (
    <Container>
        <Header>
            <WelcomeText>Hello. Welcome Back</WelcomeText>
        </Header>

        <Content>
            <UsernameForm></UsernameForm>
        </Content>

        <Footer>
            
        </Footer>
    </Container>
  );
}