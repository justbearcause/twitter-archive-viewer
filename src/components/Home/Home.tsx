import React, { FunctionComponent } from "react";
import Layout from "../Layout";
import Profile from "../Profile";
import Tweets from "../Tweets";

const Home: FunctionComponent = () => {
  return (
    <Layout>
      <Profile />
      <Tweets />
    </Layout>
  );
};

export default Home;
