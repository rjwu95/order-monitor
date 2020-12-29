import React from "react";
import { Monitor, PlayButton } from "./components";
import { useInterval } from "./hooks/useInterval";
import { connect } from "react-redux";
import { fetchSuccess, fetchFailure, toggleMonitoring } from "./actions";
import { StoreState } from "./types";

import "./sass/main.scss";

interface AppProps {
  success: number;
  failure: number;
  monitoring: boolean;
  fetchSuccess(): void;
  fetchFailure(): void;
  toggleMonitoring(): void;
}

const mapStateToProps = (state: StoreState) => state;
const mapDispatchToProps = {
  fetchSuccess,
  fetchFailure,
  toggleMonitoring,
};

const App = ({
  success,
  failure,
  monitoring,
  fetchSuccess,
  fetchFailure,
  toggleMonitoring,
}: AppProps) => {
  useInterval(
    () => {
      fetchSuccess();
      fetchFailure();
    },
    monitoring ? 200 : null
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Order Monitor</h1>
      </header>
      <main>
        <Monitor success={success} failure={failure} />
        <PlayButton isPlaying={monitoring} setIsPlaying={toggleMonitoring} />
      </main>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
