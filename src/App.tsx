import React from "react";
import ArchiveLoader from "./components/ArchiveLoader";
import Home from "./components/Home";

function App() {
  return (
    <ArchiveLoader>
      <Home />
    </ArchiveLoader>
  );
}

export default App;
