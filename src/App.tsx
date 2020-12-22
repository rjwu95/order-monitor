import React, { useState } from "react";
import { Monitor, PlayButton } from "./components";
import { useInterval } from "./hooks/useInterval";

import "./sass/main.scss";

const App = () => {
  const [success, setSuccess] = useState(0);
  const [failure, setFailure] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useInterval(
    () => {
      setSuccess((preSuccess) => preSuccess + Math.floor(Math.random() * 100));
      setFailure((preFailure) => preFailure + Math.floor(Math.random() * 2));
    },
    isPlaying ? 200 : null
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Order Monitor</h1>
      </header>
      <main>
        <Monitor success={success} failure={failure} />
        <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </main>
    </div>
  );
};

export default App;
