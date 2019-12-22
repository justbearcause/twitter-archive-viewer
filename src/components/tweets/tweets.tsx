import React, { useState } from "react";
import Tweet from "../tweet/tweet";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import TweetModel from "../../models/twitter/tweet";
import Account from "../../models/twitter/account";

import styles from "./tweets.module.css";
import Profile from "../../models/twitter/profile";

interface TweetsProps {
  tweets: TweetModel[];
  account: Account;
  profile: Profile;
}

export default (props: TweetsProps) => {
  const [state, setState] = useState({
    items: props.tweets.slice(0, Math.min(props.tweets.length, 20)),
    hasMoreItems: Math.min(props.tweets.length, 20) < props.tweets.length,
  });

  const [isFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setState(prevState => ({
      items: [...prevState.items, ...props.tweets.slice(prevState.items.length, Math.min(props.tweets.length, prevState.items.length + 20))],
      hasMoreItems: Math.min(props.tweets.length, prevState.items.length + 20) < props.tweets.length,
    }));
  }

  return (
    <div className={styles.tweets}>
      {state.items.map(tweet => <Tweet key={tweet.id} tweet={tweet} author={props.account} profile={props.profile} />)}
      {isFetching && <div>Is Fetching</div>}
    </div>
  );
};
