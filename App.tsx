import React from "react";

import { Theme } from "./src/presentations/templates";
import { Home } from "./src/presentations/pages/Home";

export default function App() {
  return (
    <Theme>
      <Home />
    </Theme>
  );
}
