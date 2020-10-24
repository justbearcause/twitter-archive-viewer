import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, AppState } from "store";
import { nextImageSource } from "store/images";

type OwnProps = {
  id: string;
  className?: string;
  alt: string;
};

type Props = OwnProps & ConnectedProps<typeof connector>;

const Image: React.FunctionComponent<Props> = (props) => {
  if (!props.image) {
    return null;
  }

  return (
    <img
      className={props.className}
      src={props.image.srcs[props.image.activeIndex]}
      onError={props.onError}
      alt={props.alt}
    />
  );
};

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  image: ownProps.id in state.images ? state.images[ownProps.id] : undefined,
});

const mapDispatch = (dispatch: AppDispatch, ownProps: OwnProps) => ({
  onError: () => {
    dispatch(nextImageSource(ownProps.id));
  },
});

const connector = connect(mapStateToProps, mapDispatch);

export default connector(Image);
