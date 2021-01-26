import styled from 'styled-components/native';
import { COLORS } from '../../styles/colors';

export const Container = styled.View`
    background-color: ${COLORS.light.white};
    padding: 16px;
    height: 100%;
`;

export const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
`;

export const NotLogged = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const IconBox = styled.View`
    position: relative;
    width: 100%;
    height: 80px;
    margin-bottom: 4px;
`;

export const IconOne = styled.View`
    position: absolute;
    justify-content: center;
    align-self: center;  
`;

export const IconTwo = styled(IconOne)`
    translateX: 10px;
    translateY: -10px;
`;

export const LoginText = styled.Text`
    margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
    width: 60%;
`;
