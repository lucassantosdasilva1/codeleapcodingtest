import React, { useEffect, useState } from 'react';
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
    const [userLogged, setUserLogged] = useState<boolean>();
    const [userTyped, setUserTyped] = useState<string>("");
    const [userOfApi, setuserOfApi] = useState<string>("");

    
    useEffect(() => {
        const {user} = Store.getState()
        console.log("userrr:  ",user);
        
        function getStore(){

            function tostring(user){
                const x = user.toString();
                return x;
            }

            setUserTyped(tostring(user))
            setuserOfApi(tostring(username))

            // console.log("userAPI: ",userOfApi);
            // console.log("userTyped: ",userTyped);

            if(userOfApi == userTyped ) {
                setUserLogged(true)    
            }
        }

        getStore()
    },[])

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