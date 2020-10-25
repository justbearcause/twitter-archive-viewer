import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch, AppState } from "store";
import { closeModal } from "store/archive";
import styles from "./Modal.module.css";

type Props = ConnectedProps<typeof connector>;

const Modal: React.FunctionComponent<Props> = (props) => {
  if (!props.isVisible) {
    return null;
  }

  return (
    <div className={styles.backdrop} onClick={props.onModalClose}>
      <div className={styles.modal}>{props.content}</div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isVisible: state.archive.isModalVisible,
  content: state.archive.modalContent,
});

const mapDispatch = (dispatch: AppDispatch) => ({
  onModalClose: () => {
    dispatch(closeModal());
  },
});

const connector = connect(mapStateToProps, mapDispatch);

export default connector(Modal);
