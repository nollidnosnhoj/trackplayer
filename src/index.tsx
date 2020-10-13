import * as React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/core";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,

  rootElement
);
