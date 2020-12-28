import React, { useState } from "react";

import { Button, Modal } from "components";

import * as S from "./styles";
import { data } from "./dataHelper";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNumber, setModalNumber] = useState(1);

  const handleClick = () => {
    console.log("Click");
  };

  const handleImage = (number: number) => {
    setModalOpen(true);
    setModalNumber(number);
  };

  return (
    <>
      <S.SectionTitle id="Projekty">Projekty</S.SectionTitle>
      {data.map((project) => (
        <div key={project.projectsTitle}>
          <S.ProjectTitle>{project.projectsTitle}</S.ProjectTitle>
          <S.ProjectDescription>
            {project.projectDescription}
          </S.ProjectDescription>
          <S.Grid>
            {project.images.map((image) =>
              image.show ? (
                <S.ImageContainer key={image.id}>
                  <S.Img
                    onClick={() => handleImage(image.id)}
                    src={image.img}
                    alt={`Project ${project.projectsTitle} image`}
                  />
                </S.ImageContainer>
              ) : null
            )}
          </S.Grid>
          <S.ButtonContainer>
            <Button handleClick={handleClick}>Link do projektu</Button>
          </S.ButtonContainer>
          <Modal
            modalOpened={modalOpen}
            setModalOpened={setModalOpen}
            modalNumber={modalNumber}
            data={project.images}
          />
        </div>
      ))}
    </>
  );
};

export default Projects;
