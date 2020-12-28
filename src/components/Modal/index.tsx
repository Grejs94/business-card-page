import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";

import { Right_arrow } from "pictures";

import * as Styled from "./styles";

type Props = {
  modalOpened: boolean;
  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  modalNumber: number;
  data?: any;
};

const SimpleModal: React.FC<Props> = ({
  modalOpened,
  setModalOpened,
  modalNumber,
  data,
}) => {
  const [photoid, setPhotoId] = useState(1);

  useEffect(() => {
    setPhotoId(modalNumber);
  }, [modalNumber]);

  const incresePhoto = () => {
    if (photoid === data.length) return;

    setPhotoId(photoid + 1);
  };

  const decresePhoto = () => {
    if (photoid === 1) return;

    setPhotoId(photoid - 1);
  };

  const generatePhoto = () =>
    data.find((image: any) => image.id === photoid).img;

  const handleClose = () => {
    setModalOpened(false);
  };

  const body = (
    <Styled.BodyWrapper>
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
