import React from 'react';

import { DeletePost } from '../../services/api';

import {
  Container,
  ModalContainer,
  QuestionContainer,
  ConfirmDelete,
  ButtonContainer,
  YesButton,
  YesText,
  NoButton,
  NoText,
  
} from './styles';

interface DeleteProps {
  id: number,
  closeModal: () => void
}

export function DeletePostComp({id, closeModal} : DeleteProps) {
  
  function handleDelete(){
    
    DeletePost(id);
    closeModal()
  }

  function handleNoDelete(){
    closeModal();
  }

  return (
    <Container>
      <ModalContainer>

        <QuestionContainer>
          <ConfirmDelete>Are you sure you want to delete this item?</ConfirmDelete>
        </QuestionContainer>

        <ButtonContainer>
          <YesButton onPress={handleDelete}>
            <YesText>YES</YesText>
          </YesButton>
          <NoButton onPress={handleNoDelete}>
            <NoText>NO</NoText>
          </NoButton>
        </ButtonContainer>
        
      </ModalContainer>
    </Container>
  );
}
