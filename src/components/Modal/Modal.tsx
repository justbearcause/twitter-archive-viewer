import React from "react";
import { AppState, useAppDispatch, useAppSelector } from "store";
import { closeModal } from "store/archive";
import styles from "./Modal.module.css";

export const Modal: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(
    (state: AppState) => state.archive.isModalVisible
  );
  const content = useAppSelector(
    (state: AppState) => state.archive.modalContent
  );

  if (!isVisible) {
    return null;
  }

  const onModalClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target !== event.currentTarget) return;

    dispatch(closeModal());
  };

  return (
    <div className={styles.backdrop} onClick={onModalClose}>
      <div className={styles.modal}>{content}</div>
    </div>
  );
};
