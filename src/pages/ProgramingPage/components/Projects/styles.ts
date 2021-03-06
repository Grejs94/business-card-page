import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { mediaMin, colors } = theme;

export { SectionTitle } from "pages/ProgramingPage/styles";

export const Grid = styled.div`
  ${mediaMin.lg} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 0 20px;

    @media (max-width: 395px) {
      gap: 15px;
      padding: 0 15px;
    }
  }

  div:last-child {
    margin-bottom: 0px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 30px;

  ${mediaMin.lg} {
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border: 1px solid gray;
  cursor: pointer;
`;

export const ProjectContainer = styled.div`
  margin-bottom: 80px;
`;

export const ProjectTitle = styled.p`
  font-weight: 600;
  text-align: center;
`;

export const ProjectDescription = styled.p`
  text-align: left;
`;

export const Link = styled.a`
  text-decoration: "none";
  margin-left: 10px;
  color: ${colors.black};
`;

export const LinkContainer = styled.div`
  margin-top: 20px;
`;
