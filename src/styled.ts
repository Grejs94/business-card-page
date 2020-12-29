import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { mediaMin, mediaMax } = theme;

export const AppWrapper = styled.div`
  margin: 0 auto;
  ${mediaMax.lg} {
    max-width: 500px;
  }

  ${mediaMin.lg} {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
`;
