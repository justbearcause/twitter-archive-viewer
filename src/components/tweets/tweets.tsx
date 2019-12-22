import React, { useState, useEffect, useCallback } from "react";
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
  const [filter, setFilter] = useState("");

  const filterDataSource = useCallback(() => props.tweets.filter(tweet => tweet.full_text.indexOf(filter) >= 0), [props.tweets, filter]);

  const [filteredTweets, setFilteredTweets] = useState(filterDataSource());

  const [state, setState] = useState({
    items: filteredTweets.slice(0, Math.min(filteredTweets.length, 20)),
    hasMoreItems: Math.min(filteredTweets.length, 20) < filteredTweets.length,
  });

  const [isFetching] = useInfiniteScroll(fetchMoreListItems);

  useEffect(() => setFilteredTweets(filterDataSource()), [filter, filterDataSource])

  useEffect(() => { setState({ items: [], hasMoreItems: true }); fetchMoreListItems(); }, [ filteredTweets ]);

  function fetchMoreListItems() {
    setState(prevState => ({
      items: [...prevState.items, ...filteredTweets.slice(prevState.items.length, Math.min(filteredTweets.length, prevState.items.length + 20))],
      hasMoreItems: Math.min(filteredTweets.length, prevState.items.length + 20) < filteredTweets.length,
    }));
  }

  return (
    <>
      <input type="text" value={filter} onChange={e => setFilter(e.target.value)} />
      <div className={styles.tweets}>
        {state.items.map(tweet => <Tweet key={tweet.id} tweet={tweet} author={props.account} profile={props.profile} />)}
        {isFetching && <div>Is Fetching</div>}
      </div>
    </>
  );
};
