import React from 'react';
import { ButtonProps } from 'react-native';

import {
    StatusBar,
} from 'react-native';

import {
    Container,
    Label,
} from './styles';

export type BackgroundType = 'primary' | 'secondary' | 'transparent';

interface Props extends ButtonProps {
    label: string;
    buttonType: BackgroundType;
    onPress: () => void;
}

const Button: React.FC<Props> = ({ label, buttonType, onPress }) => {
    return (
        <Container
            title={label}
            buttonType={buttonType}
            onPress={onPress}>
            <Label buttonType={buttonType}>
                {label}
            </Label>
        </Container>
    );
  };
  
  export default Button;