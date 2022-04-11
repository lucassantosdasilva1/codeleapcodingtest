import React, { useEffect, useState } from 'react';
import { Question } from '../styles';

import { store, RootState } from "../../../redux/index"
import { useSelector } from 'react-redux';

import { AddPosts, PostProps } from '../../../services/api';

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

interface Props {
    buttonTitle: string;
    closeModal: () => void;
}

export function NewPost({closeModal, buttonTitle} : Props ) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const usernameTyped = useSelector((state : RootState) => state.reducersList.userSliceReducer.username)

    const dataToSent : PostProps = {
        username: usernameTyped,
        title: title,
        content: content
    }

    function handlePost(){
        closeModal()
        AddPosts(dataToSent)
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
                <Button onPress={() => handlePost()}>
                    <ButtonText>{buttonTitle}</ButtonText>
                </Button>
            </Footer>
        </ContainerPostCreation>
    </Container>
  );
}