import React from "react";

import { Theme } from "./src/presentations/templates";
import { makeAddSheet } from "./src/main/factories/pages/add-sheet/add-sheet-factory";

export default function App() {
  return <Theme>{makeAddSheet()}</Theme>;
}
