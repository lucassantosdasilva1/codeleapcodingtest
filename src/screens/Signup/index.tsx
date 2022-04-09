import React, { useState } from 'react';
import { TouchableWithoutFeedback,  Keyboard, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import { Store } from '../../redux/Store';
import { changeUser} from '../../redux/Reducers';

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
  const [username, setUsername] = useState<string | null >(null);

  const navigator = useNavigation();

  function handleSetUsername(text : string){
    setUsername(text);
  }

  function handleSubmit(){
    if(!username) {
      return Alert.alert('Insira um Username')
    }

    Store.dispatch(changeUser(username))

    const {isLogged} = Store.getState()
    
    if(isLogged){
      navigator.navigate("Home");
    }
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
                  onChangeText={text => handleSetUsername(text)}
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