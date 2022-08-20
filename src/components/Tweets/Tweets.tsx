import { Button } from "components/Button";
import { Pagination } from "components/Pagination";
import { Settings, SettingsPanel } from "components/SettingsPanel";
import React, { FunctionComponent, useMemo, useRef, useState } from "react";
import { AppState, useAppSelector } from "store";
import { SearchIcon, SettingsIcon } from "../Icons";
import { Tweet } from "../Tweet";
import styles from "./Tweets.module.css";

const PAGE_SIZE = 50;

export const Tweets: FunctionComponent = () => {
  const topPaginationContainerRef = useRef<HTMLDivElement>(null);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [filters, setFilters] = useState<Settings>({});
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const tweets = useAppSelector((state: AppState) => state.archive.tweets);

  const filterDataSource = useMemo(() => {
    let result = tweets;

    if (search) {
      result = tweets.filter((tweet) => tweet.full_text.indexOf(search) >= 0);
    }

    if (filters.onlyWithMedia) {
      result = tweets.filter((tweet) => !!tweet.entities.media?.length);
    }

    if (filters.reverseOrder) {
      result = [...result].reverse();
    }

    return result;
  }, [tweets, search, filters.onlyWithMedia, filters.reverseOrder]);

  const pagesCount = Math.ceil(filterDataSource.length / PAGE_SIZE);

  const tweetsSlice = useMemo(
    () => filterDataSource.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1),
    [filterDataSource, page]
  );

  const handleTopPaginationChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleBottomPaginationChange = (newPage: number) => {
    setPage(newPage);

    if (topPaginationContainerRef.current) {
      window.scrollTo(0, topPaginationContainerRef.current.offsetTop);
    }
  };

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
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search tweets"
              className={styles.searchField}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className={styles.searchIconContainer}>
              <SearchIcon className={styles.searchIcon} />
            </div>
          </div>
          <Button
            icon={SettingsIcon}
            title="Show feed settings"
            onClick={() => setIsSettingsVisible((x) => !x)}
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
