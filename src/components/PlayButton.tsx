import { Dispatch, SetStateAction } from "react";

interface PlayButtonProps {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

export const PlayButton: React.FC<PlayButtonProps> = ({
  isPlaying,
  setIsPlaying,
}) => {
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
