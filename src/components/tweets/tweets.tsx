import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from "react";
import { connect } from "react-redux";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { RootState } from "../../store";
import { SearchIcon } from "../icons/icons";
import Tweet from "../tweet/tweet";
import styles from "./tweets.module.css";

type Props = ReturnType<typeof mapStateToProps>;

const Tweets: FunctionComponent<Props> = props => {
  const [filter, setFilter] = useState("");

  const filterDataSource = useCallback(
    () => props.tweets.filter(tweet => tweet.full_text.indexOf(filter) >= 0),
    [props.tweets, filter]
  );

  const [filteredTweets, setFilteredTweets] = useState(filterDataSource());

  const fetchMoreListItems = useCallback(() => {
    setState(prevState => ({
      items: [
        ...prevState.items,
        ...filteredTweets.slice(
          prevState.items.length,
          Math.min(filteredTweets.length, prevState.items.length + 20)
        )
      ],
      hasMoreItems:
        Math.min(filteredTweets.length, prevState.items.length + 20) <
        filteredTweets.length
    }));
  }, [filteredTweets]);

  const [state, setState] = useState({
    items: filteredTweets.slice(0, Math.min(filteredTweets.length, 20)),
    hasMoreItems: Math.min(filteredTweets.length, 20) < filteredTweets.length
  });

  const [isFetching] = useInfiniteScroll(fetchMoreListItems);

  useEffect(() => setFilteredTweets(filterDataSource()), [
    filter,
    filterDataSource
  ]);

  useEffect(() => {
    setState({ items: [], hasMoreItems: true });
    fetchMoreListItems();
  }, [filteredTweets, fetchMoreListItems]);

  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search tweets"
            className={styles.searchField}
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
          <div className={styles.searchIconContainer}>
            <SearchIcon className={styles.searchIcon} />
          </div>
        </div>
      </div>
      <div className={styles.tweets}>
        {state.items.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  account: state.archive.account,
  profile: state.archive.profile,
  tweets: state.archive.tweets
});

export default connect(mapStateToProps)(Tweets);
