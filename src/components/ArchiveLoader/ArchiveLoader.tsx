import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { AppDispatch } from "store";
import {
  setAccount,
  setAgeInfo,
  setFollowers,
  setFollowings,
  setProfile,
  setTweets,
} from "store/archive";

type Props = ReturnType<typeof mapDispatch>;

const ArchiveLoader: FunctionComponent<Props> = (props) => {
  useEffect(props.loadData, []);

  return <>{props.children}</>;
};

const mapDispatch = (dispatch: AppDispatch) => ({
  loadData: () => {
    console.log("loadData");
    dispatch(setTweets(getTweets()));
    dispatch(setFollowers(getFollowers()));
    dispatch(setFollowings(getFollowings()));
    dispatch(setAccount(getAccount()));
    dispatch(setProfile(getProfile()));
    dispatch(setAgeInfo(getAgeInfo()));
  },
});

export default connect(null, mapDispatch)(ArchiveLoader);

const getTweets = () => {
  if (!window.YTD.tweet.part0 || !window.YTD.tweet.part0.length) return [];

  return window.YTD.tweet.part0.map((x) => x.tweet);
};

const getFollowers = () => {
  if (!window.YTD.follower.part0 || !window.YTD.follower.part0.length)
    return [];

  return window.YTD.follower.part0.map((x) => x.follower);
};

const getFollowings = () => {
  if (!window.YTD.following.part0 || !window.YTD.following.part0.length)
    return [];

  return window.YTD.following.part0.map((x) => x.following);
};

const getAccount = () => {
  if (!window.YTD.account.part0 || !window.YTD.account.part0.length)
    return undefined;

  return window.YTD.account.part0[0].account;
};

const getProfile = () => {
  if (!window.YTD.profile.part0 || !window.YTD.profile.part0.length)
    return undefined;

  return window.YTD.profile.part0[0].profile;
};

const getAgeInfo = () => {
  if (!window.YTD.ageinfo.part0 || !window.YTD.ageinfo.part0.length)
    return undefined;

  return window.YTD.ageinfo.part0[0].ageMeta.ageInfo;
};
