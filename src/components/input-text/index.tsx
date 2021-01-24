import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
    Container,
    Label,
    Input,
} from './styles';

interface Props extends TextInputProps {
    label: string;
}

const InputText: React.FC<Props> = ({ label, ...restProps }) => {
    const [blurred, setBlurred] = useState(true);

    function handleBlur() {
        setBlurred(true);
    }

    function handleFocus() {
        setBlurred(false);
    }

    return (
        <Container>
            <Label>{label}</Label>
            <Input
                {...restProps}
                blurred={blurred}
                onFocus={handleFocus}
                onBlur={handleBlur} />
        </Container>
    );
}

export default InputText;