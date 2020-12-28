import React, { useState } from "react";

import { Button, Modal } from "components";

import * as S from "./styles";
import { data } from "./dataHelper";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleClick = () => {
    console.log("Click");
  };

  type IhandleImage = {
    image: string;
  };

  const handleImage = (image: string) => {
    setModalOpen(true);
    setModalImage(image);
    console.log(modalImage);
  };

  return (
    <>
      <S.SectionTitle>Projekty</S.SectionTitle>
      {data.map((project) => (
        <div key={project.projectsTitle}>
          <S.ProjectTitle>{project.projectsTitle}</S.ProjectTitle>
          <S.ProjectDescription>
            {project.projectDescription}
          </S.ProjectDescription>
          <S.Grid>
            {project.images.map((image) => (
              <S.ImageContainer key={image}>
                <S.Img
                  onClick={(e) => handleImage(image)}
                  src={image}
                  alt={`Project ${project.projectsTitle} image`}
                />
              </S.ImageContainer>
            ))}
          </S.Grid>
          <S.ButtonContainer>
            <Button handleClick={handleClick}>Więcej zdjęć</Button>
          </S.ButtonContainer>
          <S.ButtonContainer>
            <Button handleClick={handleClick}>Link do projektu</Button>
          </S.ButtonContainer>
          <Modal
            modalOpened={modalOpen}
            setModalOpened={setModalOpen}
            modalImage={modalImage}
          />
        </div>
      ))}
    </>
  );
};

export default Projects;
