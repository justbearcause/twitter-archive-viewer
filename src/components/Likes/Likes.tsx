import { Like } from "components/Like";
import { Pagination } from "components/Pagination";
import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { AppState, useAppSelector } from "store";
import { SearchIcon } from "../Icons";
import styles from "./Likes.module.css";

const PAGE_SIZE = 50;

export const Likes: FunctionComponent = () => {
  const topPaginationContainerRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({ page: "0" });
  const likes = useAppSelector((state: AppState) => state.likes.likes);

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
  const filterDataSource = useMemo(
    () =>
      search
        ? likes.filter((like) => like.fullText.indexOf(search) >= 0)
        : likes,
    [likes, search]
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
