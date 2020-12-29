import React from "react";

import { ScrollTop } from "components";

import { DotsList, Projects, Experience, Courses } from "./components";
import * as S from "./styles";

const ProgramingPage = () => {
  return (
    <S.Wrapper>
      <S.GrayContainer>
        <DotsList />
      </S.GrayContainer>
      <S.LightContainer>
        <Projects />
      </S.LightContainer>
      <S.GrayContainer>
        <Experience />
      </S.GrayContainer>
      <S.LightContainer>
        <Courses />
      </S.LightContainer>
      <ScrollTop value={400} />
    </S.Wrapper>
  );
};

export default ProgramingPage;
