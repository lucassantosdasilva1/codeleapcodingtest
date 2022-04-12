import React, { useEffect, useState } from 'react';

import { Button } from '../../Button';
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

} from './styles';

interface Props {
    closeModal: () => void;
}

export function NewPost({closeModal} : Props ) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const [buttonActive, setButtonActive] = useState<boolean>(true)

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

    useEffect(() => {
        console.log("button active",buttonActive)
        if(title.length > 3 && content.length >10){
            console.log("entrando no if")
            setButtonActive(false)
        } else {setButtonActive(true)}

    }, [title, content])
    

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
                <Button changeGreyOut={buttonActive} buttonTitle="Comment" onPress={handlePost}></Button>
            </Footer>
        </ContainerPostCreation>
    </Container>
  );
}