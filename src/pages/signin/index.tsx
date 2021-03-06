import React, { useReducer } from 'react';

import {
    Container,
} from './styles';

import {
    TextInput,
    Button,
} from '../../components';

import { useUserData } from '../../context/userContext';
 
interface FormState {
    user: string;
    password: string;
    confirmPassword: string;
}

const initialState: FormState = {
    user: '',
    password: '',
    confirmPassword: '',
}

function reducer(state: FormState, { field, value }: any): FormState {
    return {
        ...state,
        [field]: value,
    }
}

const SignIn: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

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

    function handleChangeConfirmPassword(e: any) {
        dispatch({
            field: 'confirmPassword',
            value: e,
        });   
    }

    function handleSubmit() {
        console.log(state);
        
    }

    return (
        <Container>
            <TextInput
                onChangeText={handleChangeEmail}
                label="Email"/>
            <TextInput
                onChangeText={handleChangePassword}
                secureTextEntry={true}
                label="Senha"/>
            <TextInput
                onChangeText={handleChangeConfirmPassword}
                secureTextEntry={true}
                label="Confirme sua senha"/>
            <Button
                onPress={handleSubmit}
                title="Entrar"
                label="Entrar"
                buttonType="secondary"/>
        </Container>
    );
}

export default SignIn;