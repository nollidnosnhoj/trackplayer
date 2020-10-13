import { ChakraProvider } from "@chakra-ui/core";
import * as React from "react";
import TrackPlayer from "./trackPlayer";

export default function App() {
  return (
    <ChakraProvider>
      <div>
        <TrackPlayer audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </div>
    </ChakraProvider>
  );
}
