import React, { useEffect, useState } from 'react';
import { Modal, View } from 'react-native';

import { minutesToHours } from 'date-fns/esm';
import {differenceInDays, differenceInMinutes} from 'date-fns'

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

    const [timeAgo, setTimeAgo] = useState(Number);
    const [wordOfAgo, setWordOfAgo] = useState(String);

    const store = useSelector((state: RootState) => state.reducersList.userSliceReducer)
    const usernameTyped = store.username;
    const usernameAPI = username;

    function calculateHoursAgo() {
        const dateOfPost = new Date(created_datetime)
        
        const hoje = new Date();
        
        const hojeparsed = Date.parse(hoje.toString())

        const result = differenceInMinutes(hojeparsed, dateOfPost);

        switch (true) {
            case result >= 1 && result < 60:
                setWordOfAgo("minutes ago")
                setTimeAgo(result); 
                break;
            case result >= 60 && result<1440:
                setWordOfAgo("hours ago")
                const hours = minutesToHours(result)
                setTimeAgo(hours)
                break;
            case result >= 1440:
                setWordOfAgo("days ago")
                const days = differenceInDays(hojeparsed, dateOfPost); 
                setTimeAgo(days); 
                break;
        }
       
    }

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

        calculateHoursAgo();

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
                    { timeAgo < 1 ? 
                       <PostDate>Right Now</PostDate>
                    :
                       <PostDate>{timeAgo} {wordOfAgo}</PostDate>
                    
                    }
                    
                </HeaderContentPost>

                <ContentPost>
                    {content}
                </ContentPost>
            </ContentPostWrap>


        </Container>

    );
}
