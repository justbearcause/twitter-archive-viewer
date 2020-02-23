import * as React from 'react'
import Layout from '../layout/layout'
import Profile from "../profile/profile"
import Tweets from "../tweets/tweets"

export default () => {
  const account = getAccount();
  const profile = getProfile();

  if (!account || !profile)
    return null;

  return (
    <Layout>
      <Profile
        account={account}
        profile={profile}
        ageInfo={getAgeInfo()}
        followings={getFollowings()}
        followers={getFollowers()}
      />
      <Tweets
        tweets={getTweets()}
        account={account}
        profile={profile}
      />
    </Layout>
  )
};

const getAccount = () => {
  if (!window.YTD.account.part0 || !window.YTD.account.part0.length)
    return undefined;

  return window.YTD.account.part0[0].account;
}

const getProfile = () => {
  if (!window.YTD.profile.part0 || !window.YTD.profile.part0.length)
    return undefined;

  return window.YTD.profile.part0[0].profile;
}

const getAgeInfo = () => {
  if (!window.YTD.ageinfo.part0 || !window.YTD.ageinfo.part0.length)
    return undefined;

  return window.YTD.ageinfo.part0[0].ageMeta.ageInfo;
}

const getFollowers = () => {
  if (!window.YTD.follower.part0 || !window.YTD.follower.part0.length)
    return [];

  return window.YTD.follower.part0.map(x => x.follower);
}

const getFollowings = () => {
  if (!window.YTD.following.part0 || !window.YTD.following.part0.length)
    return [];

  return window.YTD.following.part0.map(x => x.following);
}

const getTweets = () => {
  if (!window.YTD.tweet.part0 || !window.YTD.tweet.part0.length)
    return [];

  return window.YTD.tweet.part0.map(x => x.tweet);
}