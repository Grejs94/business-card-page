import React from "react";

import * as Styled from "./styles";

type Props = {
  to: string;
  children: string | JSX.Element;
  handleClick?: () => void;
};

const Link: React.FC<Props> = ({ to, children, handleClick }) => {
  return (
    <Styled.Link to={to} onClick={handleClick}>
      {children}
    </Styled.Link>
  );
};

export default Link;
