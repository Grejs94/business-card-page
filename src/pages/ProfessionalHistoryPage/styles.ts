import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { mediaMin } = theme;

export const Wrapper = styled.div`
  ${mediaMin.lg} {
    margin-left: 250px;
  }
`;
