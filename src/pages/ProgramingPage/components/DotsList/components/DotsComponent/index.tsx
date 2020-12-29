import React from "react";

import * as Styled from "./styles";

type Props = {
  children: string;
  dots: number;
};

const Dots5: React.FC<Props> = ({ children, dots }) => {
  return (
    <Styled.IconContainer>
      <Styled.DotsContainer dots={dots}>&nbsp;</Styled.DotsContainer>
      <strong>{children}</strong>
    </Styled.IconContainer>
  );
};

export default Dots5;
