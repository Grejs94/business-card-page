import React from "react";

import { ScrollTop } from "components";

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
      <ScrollTop value={400} />
    </S.Wrapper>
  );
};

export default ProgramingPage;
