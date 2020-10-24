import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { AppState } from "store";
import Layout from "../Layout";
import Profile from "../Profile";
import Tweets from "../Tweets";

type Props = ReturnType<typeof mapStateToProps>;

const Home: FunctionComponent<Props> = (props) => {
  if (!props.account || !props.profile) {
    return null;
  }

  return (
    <Layout>
      <Profile />
      <Tweets />
    </Layout>
  );
};

const mapStateToProps = (state: AppState) => ({
  account: state.archive.account,
  profile: state.archive.profile,
});

export default connect(mapStateToProps)(Home);
