import React, { useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

import { Modal } from "components";

import * as S from "./styles";
import { data } from "./dataHelper";

const Projects = () => {
  const [images, setImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNumber, setModalNumber] = useState(1);

  const handleImage = (number: number, photos: any) => {
    setImages(photos);

    setModalOpen(true);
    setModalNumber(number);
  };

  return (
    <>
      <S.SectionTitle id="Projekty">Projekty</S.SectionTitle>
      {data.map((project) => (
        <S.ProjectContainer key={project.projectsTitle}>
          <S.ProjectTitle>{project.projectsTitle}</S.ProjectTitle>
          {project.projectDescription.map((text) => (
            <S.ProjectDescription key={text}>{text}</S.ProjectDescription>
          ))}
          <S.Grid>
            {project.images.map((image) =>
              image.show ? (
                <S.ImageContainer key={image.id}>
                  <S.Img
                    onClick={() => handleImage(image.id, project.images)}
                    src={image.img}
                    alt={`Project ${project.projectsTitle} image`}
                  />
                </S.ImageContainer>
              ) : null
            )}
          </S.Grid>
          <S.LinkContainer>
            Link do kodu projektu:
            <S.Link href={project.link} target="_blank">
              <GitHubIcon />
            </S.Link>
          </S.LinkContainer>
          {project.weblink ? (
            <S.LinkContainer>
              Link do strony:
              <S.Link href={project.weblink} target="_blank">
                <WebIcon />
              </S.Link>
            </S.LinkContainer>
          ) : null}
        </S.ProjectContainer>
      ))}
      <Modal
        modalOpened={modalOpen}
        setModalOpened={setModalOpen}
        modalNumber={modalNumber}
        setModalNumber={setModalNumber}
        data={images}
      />
    </>
  );
};

export default Projects;
