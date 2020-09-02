import React from "react";
import { CssBaseline } from "@material-ui/core";

import "./styles.css";
import Notification from "./components/Notification";
import RandomComponent from "./components/RandomComponent";
import AnotherRandom from "./components/AnotherRandom";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <Notification />
        <RandomComponent />
        <AnotherRandom />
      </div>
    </>
  );
}

export default App;
