import React, { useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import { Modal } from "components";
import { SectionTitle } from "pages/ProgramingPage/styles";
import { description, images } from "./dataHelper";
import * as Styled from "./styles";

type Props = {};

const Experience: React.FC<Props> = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNumber, setModalNumber] = useState(1);

  const handleImage = (number: number) => {
    setModalOpen(true);
    setModalNumber(number);
  };

  return (
    <div>
      <SectionTitle id="Doświadczenie">Doświadczenie</SectionTitle>
      <span>{description}</span>
      <Styled.Grid>
        {images.map((image) =>
          image.show ? (
            <Styled.ImageContainer key={image.id}>
              <Styled.Img
                src={image.img}
                alt="Pictures of code-review screenshot"
                onClick={() => handleImage(image.id)}
              />
            </Styled.ImageContainer>
          ) : null
        )}
      </Styled.Grid>
      <Styled.LinkContainer>
        Link do Pull-requestów:
        <Styled.Link
          href="https://github.com/pulls?q=is%3Apr+author%3AGrejs94+archived%3Afalse+is%3Aclosed"
          target="_blank"
        >
          <GitHubIcon />
        </Styled.Link>
      </Styled.LinkContainer>
      <Modal
        modalOpened={modalOpen}
        setModalOpened={setModalOpen}
        modalNumber={modalNumber}
        data={images}
      />
    </div>
  );
};

export default Experience;
