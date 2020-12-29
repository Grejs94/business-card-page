import styled from "@emotion/styled";

import { theme } from "assets/theme";
import {
  Grid as ProjectGrid,
  ImageContainer,
  Img,
} from "pages/ProgramingPage/components/Projects/styles";

const { colors } = theme;

export const Grid = styled(ProjectGrid)`
  margin-top: 20px;
`;

export const LinkContainer = styled.div`
  margin-top: 20px;
`;

export { ImageContainer, Img };

export const Link = styled.a`
  text-decoration: "none";
  margin-left: 10px;
  color: ${colors.black};
`;
