import React from "react";
import ArchiveLoader from "./components/ArchiveLoader/ArchiveLoader";
import Home from "./components/Home/Home";

function App() {
  return (
    <ArchiveLoader>
      <Home />
    </ArchiveLoader>
  );
}

export default App;
