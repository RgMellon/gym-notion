import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${theme.colors.primary};
    position: absolute;
    top: 550px;
    right: 20px;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`;
