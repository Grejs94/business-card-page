import React from "react";

import { Button } from "components";

import * as S from "./styles";
import { data } from "./dataHelper";

type Props = {};

const Projects: React.FC<Props> = () => {
  const handleClick = () => {
    console.log("Click");
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
        </div>
      ))}
    </>
  );
};

export default Projects;
