import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors, mediaMin, mediaMax, font } = theme;

export const AppWrapper = styled.div`
  margin: 0 auto;
  ${mediaMax.lg} {
    max-width: 500px;
  }

  ${mediaMin.lg} {
    display: flex;
  }
`;
