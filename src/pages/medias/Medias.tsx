import { Media } from "components/Media";
import { Pagination } from "components/Pagination";
import { TweetMediaModel, TweetModel } from "models";
import React, { FunctionComponent, useCallback, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { AppState, useAppSelector } from "store";
import styles from "./Medias.module.css";

const PAGE_SIZE = 100;
const COLUMNS_COUNT = 3;

const splitIntoColumns = (
  medias: TweetAndMediaPair[],
  columnsCount: number
) => {
  let results: TweetAndMediaPair[][] = [];
  let totalHeights: number[] = [];

  for (let columnIndex = 0; columnIndex < columnsCount; columnIndex++) {
    results[columnIndex] = [];
    totalHeights[columnIndex] = 0;
  }

  const getColumnWithMinHeight = () => {
    let minHeight = Number.MAX_VALUE;
    let minColumnIndex = 0;
    for (let columnIndex = 0; columnIndex < columnsCount; columnIndex++) {
      if (totalHeights[columnIndex] < minHeight) {
        minHeight = totalHeights[columnIndex];
        minColumnIndex = columnIndex;
      }
    }

    return minColumnIndex;
  };

  for (const media of medias) {
    const columnIndex = getColumnWithMinHeight();
    const mediaHeight = Number(media.media.sizes.large.h);
    const mediaWidth = Number(media.media.sizes.large.w);

    totalHeights[columnIndex] += mediaHeight / mediaWidth;
    results[columnIndex].push(media);
  }

  return results;
};

type TweetAndMediaPair = {
  tweet: TweetModel;
  media: TweetMediaModel;
};

export const Medias: FunctionComponent = () => {
  const topPaginationContainerRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const medias: TweetAndMediaPair[] = useAppSelector((state: AppState) =>
    state.archive.tweets
      .filter((tweet) => !!tweet.entities.media?.length)
      .flatMap((tweet) =>
        tweet.entities!.media!.map((media) => ({ tweet, media }))
      )
  );

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

  const pagesCount = Math.ceil(medias.length / PAGE_SIZE);

  const mediasSlice = useMemo(
    () => medias.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1),
    [medias, page]
  );

  const masonryMediaSlices = useMemo(
    () => splitIntoColumns(mediasSlice, COLUMNS_COUNT),
    [mediasSlice]
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
      <div className={styles.medias}>
        {masonryMediaSlices?.map((slice) => (
          <div key={slice[0]?.media.id_str} className={styles.masonryColumn}>
            {slice.map((pair) => (
              <Media
                tweet={pair.tweet}
                media={pair.media}
                key={pair.media.id_str}
              />
            ))}
          </div>
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
