import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.4);
    justify-content: flex-end;
  `}
`;

export const CloseModal = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
`;

export const Content = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 40%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px;
    background: ${theme.colors.backgroundLight};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fonts.size.xLarge};
    color: ${theme.colors.text};
    margin-bottom: 40px;
  `}
`;

export const InputTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fonts.size.small};
    color: ${theme.colors.text};
    margin-bottom: 10px;
  `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fonts.size.small};
    color: ${theme.colors.text};

    height: 60px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${theme.colors.background};
  `}
`;
