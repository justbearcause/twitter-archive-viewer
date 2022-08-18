import classNames from "classnames";
import React from "react";

import styles from "./Pagination.module.css";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onChange?: (page: number) => void;
  className?: string;
};

export const Pagination = ({
  pageCount,
  currentPage,
  onChange,
  className,
}: PaginationProps) => {
  const isValidPage = (page: number) => {
    return page >= 0 && page < pageCount;
  };

  const getClickHandler = (page: number) => () => {
    if (!isValidPage(page)) return;

    if (onChange) {
      onChange(page);
    }
  };

  return (
    <div className={classNames(styles.container, className)}>
      <button
        type="button"
        className={styles.page}
        disabled={currentPage === 0}
        onClick={getClickHandler(0)}
      >
        ⇤
      </button>

      {isValidPage(currentPage - 2) && !isValidPage(currentPage + 1) && (
        <button
          type="button"
          className={styles.page}
          onClick={getClickHandler(currentPage - 2)}
        >
          {currentPage - 1}
        </button>
      )}
      {isValidPage(currentPage - 1) && (
        <button
          type="button"
          className={styles.page}
          onClick={getClickHandler(currentPage - 1)}
        >
          {currentPage}
        </button>
      )}
      {isValidPage(currentPage) && (
        <button
          type="button"
          className={classNames(styles.page, styles.current)}
        >
          {currentPage + 1}
        </button>
      )}
      {isValidPage(currentPage + 1) && (
        <button
          type="button"
          className={styles.page}
          onClick={getClickHandler(currentPage + 1)}
        >
          {currentPage + 2}
        </button>
      )}
      {isValidPage(currentPage + 2) && !isValidPage(currentPage - 1) && (
        <button
          type="button"
          className={styles.page}
          onClick={getClickHandler(currentPage + 2)}
        >
          {currentPage + 3}
        </button>
      )}

      <button
        type="button"
        className={styles.page}
        disabled={currentPage >= pageCount - 1}
        onClick={getClickHandler(pageCount - 1)}
      >
        ⇥
      </button>
    </div>
  );
};
