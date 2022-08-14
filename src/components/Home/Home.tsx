import { Modal } from "components/Modal";
import { Navigation } from "components/Navigation";
import { Router } from "components/Router";
import React, { FunctionComponent } from "react";
import { Layout } from "../Layout";
import { Profile } from "../Profile";

export const Home: FunctionComponent = () => {
  return (
    <Layout>
      <Modal />
      <Profile />
      <Navigation />
      <Router />
    </Layout>
  );
};
