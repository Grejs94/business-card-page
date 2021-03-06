import styled from "@emotion/styled";
import { Avatar as MaterialAvatar } from "@material-ui/core";

import { theme } from "assets/theme";

const { mediaMin } = theme;

export const MenuContainer = styled.div`
  min-width: 240px;
  justify-content: center;
  text-align: center;

  ${mediaMin.lg} {
    position: fixed;
  }
`;

export const Avatar = styled(MaterialAvatar)`
  && {
    width: 70px;
    height: 70px;
    margin: 20px auto 10px;
  }
`;

export const Paragraph = styled.p`
  margin: 2px auto 0;
`;
