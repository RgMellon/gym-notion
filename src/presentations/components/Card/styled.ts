import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    padding: 14px;
    background-color: ${theme.colors.backgroundLight};
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
    margin-top: 10px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fonts.size.medium};
    color: ${theme.colors.text};
  `}
`;

export const ContentImage = styled.View`
  margin-right: 20px;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`;
