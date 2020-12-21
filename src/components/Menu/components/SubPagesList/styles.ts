import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors, mediaMin, mediaMax, font } = theme;

export const LinkContainer = styled.div`
  flex: 1 1 0px;
  margin-bottom: 10px;
`;

export const PagesContainer = styled.div`
  margin-top: 20px;
  display: flex;

  ${mediaMin.lg} {
    display: block;
  }
`;

export const SubLinksContainer = styled.div`
  text-align: left;
  margin: 8px 0 0 10px;
`;

export const LinkParagraph = styled.p`
  margin: 0;
  font-size: ${font.size.md};

  ${mediaMin.sm} {
    font-size: ${font.size.md};
  }

  ${mediaMin.lg} {
    text-align: left;
    font-size: ${font.size.base};
  }
`;

export const SublinkParagraph = styled.p`
  margin: 4px auto;
  font-size: ${font.size.base};

  ${mediaMin.lg} {
    font-size: ${font.size.xs};
  }
`;
