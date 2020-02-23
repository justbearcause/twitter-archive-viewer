import React, { FunctionComponent } from 'react';
import Layout from '../layout/layout'
import Profile from "../profile/profile"
import Tweets from "../tweets/tweets"
import { RootState } from '../../store';
import { connect } from 'react-redux';

type Props = ReturnType<typeof mapStateToProps>;

const Home : FunctionComponent<Props> = props => {

  if (!props.account || !props.profile) {
    return null;
  }
  
  return (
    <Layout>
      <Profile />
      <Tweets />
    </Layout>
  )
};

const mapStateToProps = (state: RootState) => ({
  account: state.archive.account,
  profile: state.archive.profile,
});

export default connect(mapStateToProps)(Home)