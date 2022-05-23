import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
`;

export const Content = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 22px;
    background-color: ${theme.colors.background};

    position: absolute;
    top: 250px;
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
