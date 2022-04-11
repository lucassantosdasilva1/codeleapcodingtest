import React, { useEffect, useState } from 'react';
import { Modal, View } from 'react-native';

import { PostDTO } from '../../DTO/PostDTO';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/index';

import { DeletePost } from '../../services/api';

import {
  Container,
  HeaderPost,
  Title,
  PostManagement,
  DeleteButton,
  EditButton,
  TrashIcon,
  EditIcon,
  ContentPostWrap,
  HeaderContentPost,
  Username,
  PostDate,
  ContentPost,
  
} from './styles';
import { NewPost } from '../CreatePost/NewPost';
import { EditPost } from '../EditPost';



interface Props {
    data: PostDTO;
}

export function Post({data : {id, title, username, created_datetime, content}} : Props) {
    const [isSameUser, setIsSameUser] = useState<boolean>();
    const [editModalOpenClose, setEditModalOpenClose] = useState<boolean>(false)

    const store = useSelector((state: RootState) => state.reducersList.userSliceReducer)
    const usernameTyped = store.username;
    const usernameAPI = username;
    
    function handleDelete(id : number) {
        DeletePost(id);
    }

    function handleEdit() {
        setEditModalOpenClose(true);
    }
    function handleModalClose() {
        setEditModalOpenClose(false);
    }

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
                    <DeleteButton onPress={() => handleDelete(id)}>
                        <TrashIcon name="trash-bin" size={20} color="white"/>
                    </DeleteButton>

                    <EditButton onPress={handleEdit}>
                        <EditIcon name="edit" size={18} color="white"/>
                    </EditButton>

                    <Modal visible={editModalOpenClose} transparent>
                        <EditPost 
                            buttonTitle="Edit" 
                            closeModal={handleModalClose} 
                            id={id}
                            titleToEdit={title} 
                            commentToEdit={content} 
                        />
                            
                    </Modal>
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