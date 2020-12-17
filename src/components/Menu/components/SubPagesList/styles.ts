import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors, mediaMin, mediaMax, font } = theme;

export const LinkContainer = styled.div`
  flex: 1 1 0px;
`;

export const PagesContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const SubLinksContainer = styled.div`
  text-align: left;
  margin: 8px 0 0 10px;
`;

export const LinkParagraph = styled.p`
  margin: 0;
  font-size: ${font.size.xs};

  ${mediaMin.sm} {
    font-size: ${font.size.base};
  }

  ${mediaMin.lg} {
    font-size: ${font.size.xs};
  }
`;

export const SublinkParagraph = styled.p`
  margin: 4px auto;
  font-size: ${font.size.xs};

  ${mediaMin.sm} {
    font-size: ${font.size.sm};
  }

  ${mediaMin.lg} {
    font-size: ${font.size.xs};
  }
`;
