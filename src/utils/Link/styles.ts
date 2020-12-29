import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

import { theme } from "assets/theme";

const { colors } = theme;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${colors.black};
`;
