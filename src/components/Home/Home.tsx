import Modal from "components/Modal";
import Navigation from "components/Navigation";
import Router from "components/Router";
import React, { FunctionComponent } from "react";
import Layout from "../Layout";
import Profile from "../Profile";

const Home: FunctionComponent = () => {
  return (
    <Layout>
      <Modal />
      <Profile />
      <Navigation />
      <Router />
    </Layout>
  );
};

export default Home;
