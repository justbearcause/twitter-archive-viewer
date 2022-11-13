import { ImageLightbox } from "components/ImageLightbox";
import { Layout } from "components/Layout";
import { Navigation } from "components/Navigation";
import { Profile } from "components/Profile";
import React from "react";
import { HashRouter } from "react-router-dom";
import { Router } from "routers/Router";
import { ArchiveLoader } from "./components/ArchiveLoader";

function App() {
  return (
    <ArchiveLoader>
      <HashRouter>
        <Layout>
          <ImageLightbox />
          <Profile />
          <Navigation />
          <Router />
        </Layout>
      </HashRouter>
    </ArchiveLoader>
  );
}

export default App;
