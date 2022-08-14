import { Like } from "components/Like";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppState, useAppSelector } from "store";
import { SearchIcon } from "../Icons";
import styles from "./Likes.module.css";

export const Likes: FunctionComponent = () => {
  const likes = useAppSelector((state: AppState) => state.likes.likes);
  const [filter, setFilter] = useState("");

  const filterDataSource = useCallback(
    () =>
      filter
        ? likes.filter((like) => like.fullText.indexOf(filter) >= 0)
        : likes,
    [likes, filter]
  );

  const [filteredTweets, setFilteredTweets] = useState(filterDataSource());

  const fetchMoreListItems = useCallback(() => {
    setState((prevState) => ({
      items: [
        ...prevState.items,
        ...filteredTweets.slice(
          prevState.items.length,
          Math.min(filteredTweets.length, prevState.items.length + 20)
        ),
      ],
      hasMoreItems:
        Math.min(filteredTweets.length, prevState.items.length + 20) <
        filteredTweets.length,
    }));
  }, [filteredTweets]);

  const [state, setState] = useState({
    items: filteredTweets.slice(0, Math.min(filteredTweets.length, 20)),
    hasMoreItems: Math.min(filteredTweets.length, 20) < filteredTweets.length,
  });

  useEffect(
    () => setFilteredTweets(filterDataSource()),
    [filter, filterDataSource]
  );

  useEffect(() => {
    setState({ items: [], hasMoreItems: true });
    fetchMoreListItems();
  }, [filteredTweets, fetchMoreListItems]);

  const loadingMessage = <h4>Loading...</h4>;
  const endMessage = (
    <p style={{ textAlign: "center" }}>
      <b>Yay! You have seen it all</b>
    </p>
  );

  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search tweets"
            className={styles.searchField}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <div className={styles.searchIconContainer}>
            <SearchIcon className={styles.searchIcon} />
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={state.items.length} //This is important field to render the next data
        next={fetchMoreListItems}
        hasMore={state.hasMoreItems}
        loader={loadingMessage}
        endMessage={endMessage}
      >
        <div className={styles.tweets}>
          {state.items.map((like) => (
            <Like key={like.tweetId} like={like} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};
