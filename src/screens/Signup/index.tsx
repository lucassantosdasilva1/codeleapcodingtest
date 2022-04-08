import React, { useState } from 'react';
import { TouchableWithoutFeedback,  Keyboard, Alert} from 'react-native';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Header,
  WelcomeText,
  Content,
  UsernameForm,
  ButtonWrapper,
  Footer,
} from './styles';


export function Signup() {
  const [username, setUsername] = useState('');
  
  function handleSubmit(){
    if(!username) {
      return Alert.alert('Insira um Username')
    }

    console.log(username);

  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
          <Header>
              <WelcomeText>Hello.{'\n'}Welcome Back</WelcomeText>
          </Header>

          <Content>
              <UsernameForm>
                <Input
                  placeholder="Username"

                  keyboardType="email-address"
                  onChangeText={text =>  setUsername(text.toLowerCase())}
                />
              </UsernameForm>

              <ButtonWrapper>
                <Button 
                  title="Entrar"  
                  onPress={handleSubmit}
                  />
              </ButtonWrapper>
          </Content>

          <Footer>
              
          </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}