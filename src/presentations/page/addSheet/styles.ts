import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    position: relative;
  `}
`;

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
`;

export const Detail = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${theme.colors.background};
    margin-top: -20px;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${theme.colors.background};
  `}
`;

export const ContentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xLarge};
    color: ${theme.colors.text};
    font-weight: bold;
    margin-bottom: 10px;
  `}
`;
