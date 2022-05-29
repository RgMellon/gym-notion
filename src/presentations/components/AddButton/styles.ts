import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${theme.colors.primary};

    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: -80px;
    right: 20px;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`;
