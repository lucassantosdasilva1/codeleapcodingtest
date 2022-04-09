import React, { useState } from 'react';
import { View } from 'react-native';

import { PostDTO } from '../../DTO/PostDTO';
import { Store } from '../../redux/Store';

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
    const [userLogged, setUserLogged] = useState(true);

    // const {user} = Store.getState()

    // setUserLogged(user);

    return (
    <Container>
        <HeaderPost>
            <Title>{title}</Title>
            
            { 
                userLogged ? 
                <PostManagement>
                    <Button>
                        <TrashIcon name="trash-bin" size={20} color="white"/>
                    </Button>

                    <Button>
                        <EditIcon name="edit" size={18} color="white"/>
                    </Button>
                </PostManagement> 
                : <View/> 
            }
        </HeaderPost>

        <ContentPostWrap>
            <HeaderContentPost>
                <Username>@{username}</Username>
                <PostDate>{created_datetime}</PostDate>
            </HeaderContentPost>

            <ContentPost>
                {content}
            </ContentPost>
        </ContentPostWrap>

        
        </Container>
        
  );
}