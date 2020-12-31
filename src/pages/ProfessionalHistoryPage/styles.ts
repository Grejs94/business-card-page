import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { mediaMin, font } = theme;

export const Wrapper = styled.div`
  ${mediaMin.lg} {
    margin-left: 250px;
  }
  padding: 0 20px;
`;

export const SectionTitle = styled.p`
  text-align: center;
  font-size: ${font.size.xl};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
`;

export const SectionDescription = styled.p`
  margin: 20px 0 0 0;
`;

export const SectionWrapper = styled.div`
  margin-bottom: 80px;
`;
