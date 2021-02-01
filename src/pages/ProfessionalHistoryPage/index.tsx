import React from "react";

import { data } from "./dataHelper";

import * as Styled from "./styles";

const ProfessionalHistoryPage = () => {
  return (
    <Styled.Wrapper>
      {data.map((profession) => (
        <section key={profession.professionTitle}>
          <Styled.SectionWrapper>
            <Styled.SectionTitle>
              {profession.professionTitle}
            </Styled.SectionTitle>
            <Styled.ImageWrapperContainer>
              <Styled.ImageWrapper>
                <Styled.HeroImg src={profession.heroImage} />
              </Styled.ImageWrapper>
            </Styled.ImageWrapperContainer>
            {profession.texts.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </Styled.SectionWrapper>
        </section>
      ))}
    </Styled.Wrapper>
  );
};

export default ProfessionalHistoryPage;
