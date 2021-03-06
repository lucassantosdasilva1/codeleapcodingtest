import React, { useEffect, useState } from 'react';

import { Question } from '../CreatePost/styles';

import { store, RootState } from "../../redux/index"
import { useSelector } from 'react-redux';

import { EditPostAPI, EditProps } from '../../services/api';

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
    id: number,
    titleToEdit?: string;
    commentToEdit?: string;
    buttonTitle: string;
    closeModal: () => void;
}

export function EditPost({ id,closeModal, buttonTitle, titleToEdit, commentToEdit} : Props ) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    console.log(title);

    const usernameTyped = useSelector((state : RootState) => state.reducersList.userSliceReducer.username)
    
    let dataToSent : EditProps = {
        title: title,
        content: content
    }
    
    if(content.length == 0){
        dataToSent = {
            title: title,
            content: commentToEdit!
        }
    }

    if(title.length == 0){
        dataToSent = {
            title: titleToEdit!,
            content: content
        }
    }

    function handlePost(){
        closeModal();
        EditPostAPI( id, dataToSent);
    }    

    return (
    <Container>
        <ContainerPostCreation>
            <Question>What's on your mind?</Question>

            <Label>Title</Label>
            <TitleWrap>
                <TitleInput placeholder="Type your post title here" onChangeText={setTitle}>{titleToEdit}</TitleInput>
            </TitleWrap>

            <Label>Content</Label>
            <ContentWrap>
                <ContentInput placeholder="Content here" textAlignVertical="top" multiline onChangeText={setContent}>{commentToEdit}</ContentInput>
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