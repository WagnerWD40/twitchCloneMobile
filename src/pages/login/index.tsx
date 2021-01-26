import React, { useReducer } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
} from './styles';

import {
    TextInput,
    Button,
} from '../../components';
 
interface FormState {
    user: string;
    password: string;
}

const initialState: FormState = {
    user: '',
    password: '',
}

function reducer(state: FormState, { field, value }: any): FormState {
    return {
        ...state,
        [field]: value,
    }
}

const Login: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const navigation = useNavigation();

    function handleChangeEmail(e: any) {
        dispatch({
            field: 'email',
            value: e,
        });   
    }

    function handleChangePassword(e: any) {
        dispatch({
            field: 'password',
            value: e,
        });   
    }

    function handleSubmit() {
        console.log(state);
        navigation.navigate('Home');

        
    }

    return (
        <Container>
            <TextInput
                onChangeText={handleChangeEmail}
                label="Usuário"/>
            <TextInput
                onChangeText={handleChangePassword}
                secureTextEntry={true}
                label="Senha"/>
            <Button
                onPress={() => {}}
                title="Problemas ao efetuar login?"
                label="Problemas ao efetuar login?"
                buttonType="transparent" />
            <Button
                onPress={handleSubmit}
                title="Cadastrar-se"
                label="Cadastrar-se"
                buttonType="secondary"/>
        </Container>
    );
}

export default Login;