import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { PostDTO } from '../../DTO/PostDTO';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/index';

import {
  Container,
  HeaderPost,
  Title,
  PostManagement,
  Button,
  TrashIcon,
  EditIcon,
  ContentPostWrap,
  HeaderContentPost,
  Username,
  PostDate,
  ContentPost,
  
} from './styles';


interface Props {
    data: PostDTO;
}

export function Post({data : {title, username, created_datetime, content}} : Props) {
    const [isSameUser, setIsSameUser] = useState<boolean>();

    const store = useSelector((state: RootState) => state.reducersList.userSliceReducer)
    const usernameTyped = store.username;
    const usernameAPI = username;

    useEffect(() => {
        if( usernameTyped.toLowerCase() === usernameAPI.toLowerCase()) {
            setIsSameUser(true)    
        }
    },[])

    return (
    <Container>
        <HeaderPost>
            <Title>{title}</Title>
            
            { 
                isSameUser && 
                <PostManagement>
                    <Button>
                        <TrashIcon name="trash-bin" size={20} color="white"/>
                    </Button>

                    <Button>
                        <EditIcon name="edit" size={18} color="white"/>
                    </Button>
                </PostManagement> 
            }
        </HeaderPost>

        <ContentPostWrap>
            <HeaderContentPost>
                <Username>@{usernameAPI}</Username>
                <PostDate>{created_datetime}</PostDate>
            </HeaderContentPost>

            <ContentPost>
                {content}
            </ContentPost>
        </ContentPostWrap>

        
        </Container>
        
  );
}