import React from "react";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";

import { Button } from "components";

import * as Styled from "./styles";

type Props = {
  modalOpened: boolean;
  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  modalImage?: string;
};

const SimpleModal: React.FC<Props> = ({
  modalOpened,
  setModalOpened,
  modalImage,
}) => {
  const handleClose = () => {
    setModalOpened(false);
  };

  const body = (
    <Styled.BodyWrapper>
      <Styled.CloseIcon onClick={handleClose}>&times;</Styled.CloseIcon>
      <Styled.ImgContainer>
        <Styled.Img src={modalImage} />
      </Styled.ImgContainer>
    </Styled.BodyWrapper>
  );

  return (
    <div>
      <Modal
        open={modalOpened}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default SimpleModal;
