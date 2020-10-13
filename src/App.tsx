import { ChakraProvider } from "@chakra-ui/core";
import * as React from "react";
import TrackPlayer from "./trackPlayer";

export default function App() {
  return (
    <ChakraProvider>
      <div>
        <TrackPlayer audioUrl="http://localhost:3000/audio/sample.mp3" />
      </div>
    </ChakraProvider>
  );
}
