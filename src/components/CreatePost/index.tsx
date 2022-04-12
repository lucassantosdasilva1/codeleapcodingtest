import React, { useState } from 'react';

import { Modal } from 'react-native';

import { Button } from "../Form/Button"
import { NewPost } from './NewPost';

import {
  Container,
  Question
} from './styles';

export function CreatePost() {
    const [newPostModalOpenClose, setNewPostModalOpenClose] = useState(false);

    function handleModalOpen(){
        setNewPostModalOpenClose(true);
    }   
    
    function handleModalClose(){
        setNewPostModalOpenClose(false);
    }
  return (
    <Container>
        <Question>What's on your mind?</Question>

        <Button 
            title="New Postage" 
            onPress={handleModalOpen}
        />

        <Modal 
            visible={newPostModalOpenClose}
            transparent
        >
            <NewPost 
                closeModal={handleModalClose}
            />
        </Modal>

    </Container>
  );
}