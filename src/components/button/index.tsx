import React from 'react';

import {
    StatusBar,
} from 'react-native';

import {
    Container,
    Label,
} from './styles';

export type BackgroundType = 'primary' | 'secondary' | 'transparent';

interface Props {
    label: string;
    buttonType: BackgroundType;
}

const Button: React.FC<Props> = ({ label, buttonType }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Container buttonType={buttonType}>
                <Label buttonType={buttonType}>
                    {label}
                </Label>
            </Container>
        </>
    );
  };
  
  export default Button;