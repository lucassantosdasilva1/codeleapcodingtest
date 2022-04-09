import React, { useState } from 'react';
// import { Button } from '../../Form/Button';
import { Question } from '../styles';

import { Post } from '../../../services/api';

import {
  Container,
  ContainerPostCreation,
  TitleWrap,
  ContentWrap,
  Label,
  TitleInput,
  ContentInput,
  Footer,
  Button,
  ButtonText,

} from './styles';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

interface Props {
    closeModal: () => void;
}

export function NewPost({closeModal} : Props ) {
    const [username, setUsername] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [content, setContent] = useState<string | null>(null);

    function handlePost(){
        closeModal()

        Post({
            username: "lucassantos",
            title: "tituloqualquer",
            content: "string"
        })
    }

    return (
    <Container>
        <ContainerPostCreation>
            <Question>What's on your mind?</Question>

            <Label>Title</Label>
            <TitleWrap>
                <TitleInput placeholder="Type your post title here" onChangeText={setTitle}></TitleInput>
            </TitleWrap>

            <Label>Content</Label>
            <ContentWrap>
                <ContentInput placeholder="Content here" textAlignVertical="top" multiline onChangeText={setContent}></ContentInput>
            </ContentWrap>

            <Footer>
                <Button onPress={handlePost}>
                    <ButtonText>Coment</ButtonText>
                </Button>
            </Footer>
        </ContainerPostCreation>
    </Container>
  );
}