import { Like } from "components/Like";
import { Pagination } from "components/Pagination";
import React, { FunctionComponent, useMemo, useRef, useState } from "react";
import { AppState, useAppSelector } from "store";
import { SearchIcon } from "../Icons";
import styles from "./Likes.module.css";

const PAGE_SIZE = 50;

export const Likes: FunctionComponent = () => {
  const topPaginationContainerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(0);
  const likes = useAppSelector((state: AppState) => state.likes.likes);

  const filterDataSource = useMemo(
    () =>
      filter
        ? likes.filter((like) => like.fullText.indexOf(filter) >= 0)
        : likes,
    [likes, filter]
  );

  const pagesCount = Math.ceil(filterDataSource.length / PAGE_SIZE);

  const likesSlice = useMemo(
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
        className={styles.searchAndPaginationContainer}
      >
        <Pagination
          className={styles.topPagination}
          currentPage={page}
          pageCount={pagesCount}
          onChange={handleTopPaginationChange}
        />
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
      <div className={styles.tweets}>
        {likesSlice.map((like) => (
          <Like key={like.tweetId} like={like} />
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
