import React, { useState, useEffect, useRef } from "react";
import { Box, Circle, Flex } from "@chakra-ui/core";
import { IoMdPlay, IoMdPause } from "react-icons/io";

import Wavesurfer from "wavesurfer.js";

interface TrackPlayerProps {
  audioUrl: string;
  playing?: boolean;
  duration?: number;
}

const TrackPlayer: React.FC<TrackPlayerProps> = ({
  audioUrl,
  playing = false,
  duration = 0,
}) => {
  const [isPlaying, setIsPlaying] = useState(playing);
  const [durationState, setDurationState] = useState(duration);

  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<Wavesurfer | null>(null);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = Wavesurfer.create({
        container: waveformRef.current,
        waveColor: "#fff",
      });

      wavesurfer.current.load(audioUrl);

      wavesurfer.current.on("ready", () => {
        if (isPlaying) {
          wavesurfer.current?.play();
        } else {
          wavesurfer.current?.pause();
        }
      });
    }
    return () => wavesurfer.current?.destroy();
  }, []);

  const onPlayPause = () => {
    setIsPlaying(!isPlaying);
    wavesurfer.current?.playPause();
  };

  return (
    <Flex bg="#F7FAFC" paddingY="0.2rem" paddingX="0.2rem">
      <Box padding="1rem">
        <Circle size="70px" bg="tomato" color="white" onClick={onPlayPause}>
          {isPlaying ? <IoMdPause size="30px" /> : <IoMdPlay size="30px" />}
        </Circle>
      </Box>
      <Box width="100%">
        <div ref={waveformRef}></div>
      </Box>
    </Flex>
  );
};

export default TrackPlayer;
