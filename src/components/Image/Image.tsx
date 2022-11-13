import { Skeleton } from "components/Skeleton";
import React, { useState } from "react";
import { AppState, useAppDispatch, useAppSelector } from "store";
import { nextImageSource } from "store/images";

type Props = {
  id: string;
  className?: string;
  alt: string;
  isLazy?: boolean;
  width?: number;
  height?: number;
  withSkeleton?: boolean;
};

export const Image: React.FunctionComponent<Props> = ({
  id,
  className,
  alt,
  isLazy,
  height,
  width,
  withSkeleton,
}) => {
  const [isLoading, setIsLoading] = useState(true);
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

  const img = (
    <img
      className={className}
      src={image.srcs[image.activeIndex]}
      onError={onError}
      onLoad={() => setIsLoading(false)}
      alt={alt}
      loading={isLazy ? "lazy" : undefined}
      height={height ? `${height}px` : undefined}
      width={width ? `${width}px` : undefined}
    />
  );

  if (withSkeleton) return <Skeleton isLoading={isLoading}>{img}</Skeleton>;

  return img;
};
