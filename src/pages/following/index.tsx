import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Title,
    NotLogged,
    IconBox,
    IconOne,
    IconTwo,
    LoginText,
    ButtonContainer,
} from './styles';

import {
    Button,
} from '../../components';

function Following() {
    const navigation = useNavigation();

    function handleLoginOrSignIn() {
        navigation.navigate('Welcome');
    }

    return (
        <Container>
            <Title>Seguindo</Title>
            <NotLogged>
                <IconBox>
                    <IconOne>
                        <Ionicons name="heart-sharp" size={80} color="#B1B1B1"/>
                    </IconOne>
                    <IconTwo>
                        <Ionicons name="heart-outline" size={80} />
                    </IconTwo>
                </IconBox>
                <LoginText>Faça o login e comece a seguir!</LoginText>
                <ButtonContainer>
                    <Button
                        onPress={handleLoginOrSignIn}
                        title="Faça login ou inscreva-se"
                        label="Faça login ou inscreva-se"
                        buttonType='secondary' />
                </ButtonContainer>
            </NotLogged>
        </Container>
    )
}

export default Following;