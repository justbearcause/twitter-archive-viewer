import { Pagination } from "components/Pagination";
import { Tweet } from "components/Tweet";
import React, { FunctionComponent, useCallback, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { AppState, useAppSelector } from "store";
import styles from "./Medias.module.css";

const PAGE_SIZE = 50;

export const Medias: FunctionComponent = () => {
  const topPaginationContainerRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
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
    return tweets.filter((tweet) => !!tweet.entities.media?.length);
  }, [tweets]);

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
      </div>
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
