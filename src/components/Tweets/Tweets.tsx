import { Button } from "components/Button";
import { Pagination } from "components/Pagination";
import { SearchField } from "components/SearchField";
import { Settings, SettingsPanel } from "components/SettingsPanel";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { AppState, useAppSelector } from "store";
import { SettingsIcon } from "../Icons";
import { Tweet } from "../Tweet";
import styles from "./Tweets.module.css";

const PAGE_SIZE = 50;

export const Tweets: FunctionComponent = () => {
  const topPaginationContainerRef = useRef<HTMLDivElement>(null);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<Settings>({});
  const [search, setSearch] = useState("");
  const tweets = useAppSelector((state: AppState) => state.archive.tweets);

  const page = useMemo(() => {
    const p = Number(searchParams.get("page"));
    return isNaN(p) ? 0 : p;
  }, [searchParams]);

  const setPage = useCallback(
    (newPage: number) => {
      setSearchParams({ page: String(newPage) });
    },
    [setSearchParams]
  );

  const filterDataSource = useMemo(() => {
    let result = tweets;

    if (search) {
      result = result.filter((tweet) => tweet.full_text.indexOf(search) >= 0);
    }

    if (filters.onlyWithMedia) {
      result = result.filter((tweet) => !!tweet.entities.media?.length);
    }

    if (filters.hideRetweets) {
      result = result.filter((tweet) => !tweet.retweeted);
    }

    if (filters.reverseOrder) {
      result = [...result].reverse();
    }

    return result;
  }, [
    tweets,
    search,
    filters.onlyWithMedia,
    filters.reverseOrder,
    filters.hideRetweets,
  ]);

  const pagesCount = Math.ceil(filterDataSource.length / PAGE_SIZE);

  const tweetsSlice = useMemo(
    () => filterDataSource.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1),
    [filterDataSource, page]
  );

  const handleTopPaginationChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleBottomPaginationChange = (newPage: number) => {
    if (topPaginationContainerRef.current) {
      const offset = topPaginationContainerRef.current.offsetTop;
      setTimeout(() => window.scrollTo(0, offset), 0);
    }

    setPage(newPage);
  };

  useEffect(() => {
    setPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.onlyWithMedia, filters.hideRetweets]);

  return (
    <>
      <div
        ref={topPaginationContainerRef}
        className={styles.filtersAndPaginationContainer}
      >
        <Pagination
          className={styles.topPagination}
          currentPage={page}
          pageCount={pagesCount}
          onChange={handleTopPaginationChange}
        />
        <div className={styles.searchAndSettingsWrapper}>
          <SearchField value={search} onChange={setSearch} />
          <Button
            icon={SettingsIcon}
            title={
              isSettingsVisible ? "Hide feed settings" : "Show feed settings"
            }
            onClick={() => setIsSettingsVisible((x) => !x)}
            toggled={isSettingsVisible}
            borderStyle="round"
          />
        </div>
      </div>
      {isSettingsVisible && (
        <SettingsPanel
          className={styles.filtersPanel}
          value={filters}
          onChange={setFilters}
        />
      )}
      <div className={styles.tweets}>
        {tweetsSlice.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
      <div className={styles.bottomPaginationContainer}>
        <Pagination
          className={styles.bottomPagination}
          currentPage={page}
          pageCount={pagesCount}
          onChange={handleBottomPaginationChange}
        />
      </div>
    </>
  );
};
