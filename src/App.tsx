import { Layout } from "components/Layout";
import { Modal } from "components/Modal";
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
          <Modal />
          <Profile />
          <Navigation />
          <Router />
        </Layout>
      </HashRouter>
    </ArchiveLoader>
  );
}

export default App;
