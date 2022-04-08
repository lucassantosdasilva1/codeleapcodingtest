import React from 'react';

import { Button } from "../Form/Button"

import {
  Container,
  Question
} from './styles';

export function CreatePost() {
  return (
    <Container>
        <Question>What's on your mind?</Question>

        <Button title="New Postage"/>

    </Container>
  );
}