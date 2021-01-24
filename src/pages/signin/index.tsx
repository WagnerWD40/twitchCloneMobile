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

const SignIn: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e: any) {
        dispatch({
            field: e.target.name,
            value: e.target.value
        });
    }

    return (
        <Container>
            <TextInput label="Usuário"/>
            <TextInput
                secureTextEntry={true}
                label="Senha"/>
            <Button
                label="Problemas ao efetuar login?"
                buttonType="transparent" />
            <Button
                label="Entrar"
                buttonType="secondary"/>
        </Container>
    );
}

export default SignIn;