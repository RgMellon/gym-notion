import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    align-items: center;
  `}
`;

export const Banner = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Content = styled.View`
  width: 95%;
  height: 100%;
  border-radius: 22px;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;
