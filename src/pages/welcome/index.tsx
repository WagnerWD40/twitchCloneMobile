import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();

    function handleNavigateLogin() {
        navigation.navigate('Login');
    }

    function handleNavigateSignIn() {
        navigation.navigate('SignIn');
    }

    function handleNavigateHome() {
        navigation.navigate('Home');
    }

    return (
        <Container>
            <Title>
                Boas-vindas à Twitch
            </Title>
            <Button
                onPress={handleNavigateLogin}
                title="Entrar"
                label="Entrar"
                buttonType="primary" />
            <Button
                onPress={handleNavigateSignIn}
                title="Cadastrar-se"
                label="Cadastrar-se"
                buttonType="secondary"/>
            <Button
                onPress={handleNavigateHome}
                title="Ignorar"
                label="Ignorar"
                buttonType="transparent" />
        </Container>        
    );
  };

export default Welcome;