import React from "react";
import { BrowserRouter } from "react-router-dom";
import ArchiveLoader from "./components/ArchiveLoader";
import Home from "./components/Home";

function App() {
  return (
    <ArchiveLoader>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ArchiveLoader>
  );
}

export default App;
