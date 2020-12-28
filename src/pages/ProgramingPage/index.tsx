import React from "react";

import { DotsList, Projects, Experience } from "./components";

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
    </S.Wrapper>
  );
};

export default ProgramingPage;
