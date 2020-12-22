import { Dispatch, SetStateAction } from "react";

interface PlayButtonProps {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

export const PlayButton = ({ isPlaying, setIsPlaying }: PlayButtonProps) => {
  return (
    <div>
      <button
        style={{ marginTop: 20 }}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "pause" : "play"}
      </button>
    </div>
  );
};
