import classNames from "classnames";
import { Button } from "components/Button";
import { NextIcon, PreviousIcon } from "components/Icons";
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
      <Button
        className={styles.page}
        disabled={currentPage === 0}
        onClick={getClickHandler(0)}
        title="Go to the first page"
        icon={PreviousIcon}
      />

      {isValidPage(currentPage - 2) && !isValidPage(currentPage + 1) && (
        <Button
          className={styles.page}
          onClick={getClickHandler(currentPage - 2)}
        >
          {currentPage - 1}
        </Button>
      )}
      {isValidPage(currentPage - 1) && (
        <Button
          className={styles.page}
          onClick={getClickHandler(currentPage - 1)}
        >
          {currentPage}
        </Button>
      )}
      {isValidPage(currentPage) && (
        <Button className={classNames(styles.page, styles.current)} disabled>
          {currentPage + 1}
        </Button>
      )}
      {isValidPage(currentPage + 1) && (
        <Button
          className={styles.page}
          onClick={getClickHandler(currentPage + 1)}
        >
          {currentPage + 2}
        </Button>
      )}
      {isValidPage(currentPage + 2) && !isValidPage(currentPage - 1) && (
        <Button
          className={styles.page}
          onClick={getClickHandler(currentPage + 2)}
        >
          {currentPage + 3}
        </Button>
      )}

      <Button
        className={styles.page}
        disabled={currentPage >= pageCount - 1}
        onClick={getClickHandler(pageCount - 1)}
        title="Go to the last page"
        icon={NextIcon}
      />
    </div>
  );
};
