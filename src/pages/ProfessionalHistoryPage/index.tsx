import React from "react";

import { data } from "./dataHelper";

import * as Styled from "./styles";

const ProfessionalHistoryPage = () => {
  return (
    <Styled.Wrapper>
      {data.map((profession) => (
        <section>
          <Styled.SectionWrapper>
            <Styled.SectionTitle>
              {profession.professionTitle}
            </Styled.SectionTitle>
            <Styled.ImageWrapper>
              <Styled.HeroImg src={profession.heroImage} />
            </Styled.ImageWrapper>
            {profession.texts.map((text) => (
              <p>{text}</p>
            ))}
          </Styled.SectionWrapper>
        </section>
      ))}
    </Styled.Wrapper>
  );
};

export default ProfessionalHistoryPage;
