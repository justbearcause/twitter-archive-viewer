import React from "react";
import { AppState, useAppDispatch, useAppSelector } from "store";
import { nextImageSource } from "store/images";

type Props = {
  id: string;
  className?: string;
  alt: string;
};

export const Image: React.FunctionComponent<Props> = ({
  id,
  className,
  alt,
}) => {
  const dispatch = useAppDispatch();
  const image = useAppSelector((state: AppState) =>
    id in state.images ? state.images[id] : undefined
  );

  const onError = () => {
    dispatch(nextImageSource(id));
  };

  if (!image) {
    return null;
  }

  return (
    <img
      className={className}
      src={image.srcs[image.activeIndex]}
      onError={onError}
      alt={alt}
    />
  );
};
