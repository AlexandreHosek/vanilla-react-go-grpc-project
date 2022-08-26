import ReactDOM from "react-dom";
import React from "react";

function App() {
  return <h1>React app bundled with esbuild</h1>;
}

ReactDOM.render(<App />, document.getElementById("app"));
