import styled from "@emotion/styled";

import { theme } from "assets/theme";

const { colors, mediaMin } = theme;

export const LeftArrowContainer = styled.div`
  position: absolute;
  left: 3%;
  top: 45%;
  width: 10%;
  height: 10%;
  cursor: pointer;
  opacity: 0.5;

  ${mediaMin.lg} {
    width: 4%;
    height: 4%;
  }
`;

export const RightArrowContainer = styled.div`
  position: absolute;
  right: 3%;
  top: 45%;
  width: 10%;
  height: 10%;
  cursor: pointer;
  opacity: 0.5;

  ${mediaMin.lg} {
    width: 4%;
    height: 4%;
  }
`;

export const RightArrow = styled.img`
  width: 100%;
  height: auto;
`;

export const LeftArrow = styled.img`
  width: 100%;
  height: auto;
  transform: rotate(180deg);
`;

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
