import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { AppDispatch } from "store";
import { setFollowers, setFollowings, setTweetsThunk } from "store/archive";
import { setUserThunk } from "store/user";

type Props = ReturnType<typeof mapDispatch>;

const ArchiveLoader: FunctionComponent<Props> = (props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(props.loadData, []);

  return <>{props.children}</>;
};

const mapDispatch = (dispatch: AppDispatch) => ({
  loadData: () => {
    dispatch(setTweetsThunk(getTweets()));
    dispatch(setFollowers(getFollowers()));
    dispatch(setFollowings(getFollowings()));
    dispatch(setUserThunk(getProfile(), getAccount(), getAgeInfo()));
  },
});

export default connect(null, mapDispatch)(ArchiveLoader);

const getTweets = () => {
  return window.YTD.tweet?.part0?.map((x) => x.tweet);
};

const getFollowers = () => {
  return window.YTD.follower?.part0?.map((x) => x.follower);
};

const getFollowings = () => {
  return window.YTD.following?.part0?.map((x) => x.following);
};

const getAccount = () => {
  return window.YTD.account?.part0?.shift()?.account;
};

const getProfile = () => {
  return window.YTD.profile?.part0?.shift()?.profile;
};

const getAgeInfo = () => {
  return window.YTD.ageinfo?.part0?.shift()?.ageMeta?.ageInfo;
};
