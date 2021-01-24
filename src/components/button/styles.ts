import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';
import {
    BackgroundType,
} from './index';

interface ButtonProps {
    buttonType: BackgroundType;   
}

export const Container = styled.View<ButtonProps>`
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

export const Label = styled.Text<ButtonProps>`
    color: ${({ buttonType }) => buttonType === 'primary' ? COLORS.light.textLight
                                : buttonType === 'secondary' ? COLORS.light.textDark
                                : COLORS.light.primary };
    font-weight: 700;
`;