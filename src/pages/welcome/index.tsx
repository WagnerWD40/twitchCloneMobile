import React from 'react';

import {
    StatusBar,
} from 'react-native';

import {
    Container,
    Title,
} from './styles';

import {
    Button,
} from '../../components';

const Welcome = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Container>
                <Title>
                    Boas-vindas à Twitch
                </Title>
                <Button label="Entrar" buttonType="primary" />
                <Button label="Cadastrar-se" buttonType="secondary"/>
                <Button label="Ignorar" buttonType="transparent" />
            </Container>
        </>
    );
  };
  
  export default Welcome;