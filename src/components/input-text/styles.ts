import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';

interface InputProps {
    blurred: boolean;
}

export const Container = styled.View`

`;

export const Label = styled.Text`
    margin-bottom: 8px;
    font-weight: 700;
`;

export const Input = styled.TextInput<InputProps>`
    padding: 8px 16px;
    background-color: ${({ blurred }) => blurred ? COLORS.light.secondary : COLORS.light.white};
    border: 2px solid ${({ blurred }) => blurred ? COLORS.light.secondary : COLORS.light.primary};
    border-radius: 8px;
    margin-bottom: 16px;
`;
