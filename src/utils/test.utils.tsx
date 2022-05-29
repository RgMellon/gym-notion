import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react-native";

import { ThemeProvider } from "styled-components/native";
import theme from "../presentations/styles/theme";

type customRenderProps = {} & Omit<RenderOptions, "queries">;

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: customRenderProps = {}
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions);

export * from "@testing-library/react-native";
export { customRender as render };
