import styled from "@emotion/styled";

import { theme } from "assets/theme";

import { DotsContainerProps } from "../../../../interfaces";

const { colors, mediaMin, mediaMax, font } = theme;

export const IconsContainer = styled.div`
  margin-top: 30px;
`;

export const IconContainer = styled.div`
  text-align: center;
  padding: 0 0 38px 0;
  margin: 0 0 0 0;
  display: inline-block;
  width: 44%;

  ${mediaMin.xs} {
    width: 33%;
  }

  ${mediaMin.md} {
    width: 25%;
  }
`;

export const DotsContainer = styled.div`
  background: ${(props: DotsContainerProps) =>
    `url(https://l.gpcdn.pl/3/39/399/399183/_res/${props.dots}dot.png) no-repeat top center`};
  height: 11px;
  font-size: 12px;
  margin: 0 0 9px;
`;
