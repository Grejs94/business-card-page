import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors, mediaMin } = theme;

export const Wrapper = styled.div`
  ${mediaMin.lg} {
    flex-grow: 1;

    margin-left: 250px;
  }
`;

export const RootContainer = styled.div`
  padding: 25px;
  background-color: ${colors.grey};
`;

export const GrayContainer = styled(RootContainer)``;

export const LightContainer = styled(RootContainer)`
  background-color: ${colors.white};
`;

export const SectionTitle = styled.p`
  margin: 0 0 40px;
  font-weight: 600;

  ::before {
    background-image: linear-gradient(rgb(149, 90, 4) 0%, rgb(146, 66, 7) 100%);
    background-color: transparent;

    content: "";
    display: block;
    background: transparent linear-gradient(180deg, #f99f1c 0%, #f47b20 100%) 0%
      0% no-repeat padding-box;
    width: 18px;
    height: 1px;
    opacity: 1;
    margin: 9px 0 0 -25px;
    position: absolute;
  }

  ${mediaMin.lg} {
    margin: 0 0 30px;

    ::before {
      width: 21px;
    }
  }
`;
