import React, { useState } from 'react';
import { TouchableWithoutFeedback,  Keyboard, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/';
import { changeUserAction } from '../../redux/userSlice';


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
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.reducersList.userSliceReducer)
  
  const navigator = useNavigation();

  function handleSubmit(){
    if(store.username == "") {
      return Alert.alert('Insira um Username')
    }

    const {isLogged} = store;
  
    console.log("depois ",store.username)

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
                  onChangeText={text => dispatch(changeUserAction(text))}
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