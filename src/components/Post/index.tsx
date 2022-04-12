import React, { useEffect, useState } from 'react';
import { Modal, View } from 'react-native';

import { EditPost } from '../EditPost';

import { PostDTO } from '../../DTO/PostDTO';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/index';

import { DeletePostComp } from '../DeletePostComp';

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






interface Props {
    data: PostDTO;
}

export function Post({ data: { id, title, username, created_datetime, content } }: Props) {
    const [isSameUser, setIsSameUser] = useState<boolean>();
    const [visibleEditModal, setVisibleEditModal] = useState<boolean>(false)
    const [visibleDeleteModal, setVisibleDeleteModal] = useState(Boolean);

    const store = useSelector((state: RootState) => state.reducersList.userSliceReducer)
    const usernameTyped = store.username;
    const usernameAPI = username;

    function handleModalDeleteOpen() {
        setVisibleDeleteModal(true)
    }
    function handleModalDeleteClose() {
        setVisibleDeleteModal(false)
    }

    function handleModalEditOpen() {
        setVisibleEditModal(true);
    }

    function handleModalEditClose() {
        console.log("entrou handleModalEditClose")
        setVisibleEditModal(false);
    }

    useEffect(() => {
        if (usernameTyped.toLowerCase() === usernameAPI.toLowerCase()) {
            setIsSameUser(true)
        }

    }, [])

    return (
        <Container>
            <HeaderPost>
                <Title>{title}</Title>

                {
                    isSameUser &&

                    <PostManagement>
                        
                        <DeleteButton onPress={handleModalDeleteOpen}>
                            <TrashIcon name="trash-bin" size={20} color="white" />
                        </DeleteButton>
                        <Modal visible={visibleDeleteModal} transparent>
                            <DeletePostComp 
                                id={id} 
                                closeModal={handleModalDeleteClose}
                            />
                        </Modal>

                        <EditButton onPress={handleModalEditOpen}>
                            <EditIcon name="edit" size={18} color="white" />
                        </EditButton>
                        <Modal visible={visibleEditModal} transparent>
                            <EditPost
                                id={id}
                                closeModal={handleModalEditClose}
                                titleToEdit={title}
                                commentToEdit={content}
                                buttonTitle="Edit"
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