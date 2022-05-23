import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 14px;
    background-color: ${theme.colors.backgroundLight};
    flex-direction: row;
    justify-content: space-between;
    border-radius: 15px;
    margin-top: 10px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.text};
    font-weight: bold;
  `}
`;

export const ContentImage = styled.View``;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`;
