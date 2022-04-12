import React, { useState } from 'react';
import { ButtonProps, TouchableOpacityProps } from 'react-native';
import { Title } from '../Form/Button/styles';

import {
  Container,
  ButtonText,
} from './styles';

interface buttonprops extends TouchableOpacityProps{
    buttonTitle: string;
    changeGreyOut?: boolean;
}


export function Button( {buttonTitle, changeGreyOut, ...rest} : buttonprops) {
  return (
    <Container {...rest} disabled={changeGreyOut} isGreyOutVisible={changeGreyOut}>
        <ButtonText isGreyOutVisible={changeGreyOut}>{buttonTitle}</ButtonText>
    </Container>
  );
}