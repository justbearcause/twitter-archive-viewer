import React from "react";
import { HashRouter } from "react-router-dom";
import { ArchiveLoader } from "./components/ArchiveLoader";
import { Home } from "./components/Home";

function App() {
  return (
    <ArchiveLoader>
      <HashRouter>
        <Home />
      </HashRouter>
    </ArchiveLoader>
  );
}

export default App;
