import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';

export const Container = styled.View`
    background-color: ${COLORS.light.background};
    height: 100%;
    padding: 32px;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${COLORS.light.textDark};
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 40px;
`;