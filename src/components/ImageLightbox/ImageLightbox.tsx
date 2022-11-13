import { Image } from "components/Image";
import React from "react";
import { AppState, useAppDispatch, useAppSelector } from "store";
import { closeModal } from "store/archive";
import styles from "./ImageLightbox.module.css";

export const ImageLightbox: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(
    (state: AppState) => state.archive.isImageShown
  );
  const image = useAppSelector((state: AppState) => state.archive.image);

  if (!isVisible || !image) {
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
      <div className={styles.container}>
        <Image id={image.id} alt={image.display_url} className={styles.image} />
      </div>
    </div>
  );
};
