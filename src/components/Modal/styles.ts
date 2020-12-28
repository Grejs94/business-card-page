import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors } = theme;

export const BodyWrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 80%;
  height: auto;
  background-color: ${colors.white};
  border: 2px solid ${colors.black};
  box-shadow: 0px 0px 6px 0.5px ${colors.black};
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 7px;
  top: 5px;
  cursor: pointer;
  font-size: 20px;
`;

export const ImgContainer = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
