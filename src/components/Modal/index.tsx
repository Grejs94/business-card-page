import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";

import { Right_arrow } from "pictures";

import * as Styled from "./styles";

type Props = {
  modalOpened: boolean;
  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  modalNumber: number;
  data?: any;
  setModalNumber?: React.Dispatch<React.SetStateAction<number>>;
};

const SimpleModal: React.FC<Props> = ({
  modalOpened,
  setModalOpened,
  modalNumber,
  data,
  setModalNumber,
}) => {
  const [photoid, setPhotoId] = useState(1);

  useEffect(() => {
    setPhotoId(modalNumber);
  }, [modalNumber]);

  if (data.length < 1) {
    return null;
  }

  const incresePhoto = () => {
    if (photoid === data.length) {
      setPhotoId(1);
      return;
    }

    setPhotoId(photoid + 1);
  };

  const decresePhoto = () => {
    if (photoid === 1) {
      setPhotoId(data.length);
      return;
    }

    setPhotoId(photoid - 1);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.type === "keydown") {
      if (event.code === "ArrowRight") {
        incresePhoto();
      }
      if (event.code === "ArrowLeft") {
        decresePhoto();
      }
    }
    return;
  };

  const generatePhoto = () =>
    data.find((image: any) => image.id === photoid).img;

  const handleClose = () => {
    setModalOpened(false);
    setPhotoId(1);
    if (setModalNumber) {
      setModalNumber(1);
    }
  };

  const body = (
    <Styled.BodyWrapper onKeyDown={handleKeyPress}>
      <Styled.CloseIcon onClick={handleClose}>&times;</Styled.CloseIcon>
      <Styled.RightArrowContainer>
        <Styled.RightArrow src={Right_arrow} onClick={incresePhoto} />
      </Styled.RightArrowContainer>
      <Styled.LeftArrowContainer onClick={decresePhoto}>
        <Styled.LeftArrow src={Right_arrow} />
      </Styled.LeftArrowContainer>
      <Styled.ImgContainer>
        <Styled.Img src={generatePhoto()} />
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
