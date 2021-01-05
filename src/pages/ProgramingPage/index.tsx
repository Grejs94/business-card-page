import React from "react";

import { ScrollTop } from "components";

import { data } from "./dataHelper";
import * as S from "./styles";

const ProgramingPage = () => {
  return (
    <S.Wrapper>
      {data.map((section) => (
        <section key={section.id}>
          {section.container === "gray" ? (
            <S.GrayContainer>{<section.component />}</S.GrayContainer>
          ) : (
            <S.LightContainer>{<section.component />}</S.LightContainer>
          )}
        </section>
      ))}
      <ScrollTop value={400} />
    </S.Wrapper>
  );
};

export default ProgramingPage;
