import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';
import { ButtonProps, TouchableOpacity } from 'react-native';

import {
    BackgroundType,
} from './index';

interface Props extends ButtonProps{
    buttonType: BackgroundType;   
}

interface ButtonTypeProps {
    buttonType: BackgroundType;   
}

export const Container = styled.TouchableOpacity<Props>`
    width: 100%;
    background-color: ${({ buttonType }) => buttonType === 'primary' ? COLORS.light.primary
                                            : buttonType === 'secondary' ? COLORS.light.secondary
                                            : 'transparent' };
    height: 32px;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 4px;
`;

export const Label = styled.Text<ButtonTypeProps>`
    color: ${({ buttonType }) => buttonType === 'primary' ? COLORS.light.textLight
                                : buttonType === 'secondary' ? COLORS.light.textDark
                                : COLORS.light.primary };
    font-weight: 700;
`;