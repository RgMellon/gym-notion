import React from "react";

import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";

type Props = {
  children: JSX.Element;
};

export function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
