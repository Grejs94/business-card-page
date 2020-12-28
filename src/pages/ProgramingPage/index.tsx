import React from "react";

import { DotsList, Projects, Experience, Courses } from "./components";

import * as S from "./styles";

const ProgramingPage = () => {
  return (
    <S.Wrapper>
      <S.grayContainer>
        <DotsList />
      </S.grayContainer>
      <S.lightContainer>
        <Projects />
      </S.lightContainer>
      <S.grayContainer>
        <Experience />
      </S.grayContainer>
      <S.lightContainer>
        <Courses />
      </S.lightContainer>
    </S.Wrapper>
  );
};

export default ProgramingPage;
