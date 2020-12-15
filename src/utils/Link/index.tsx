import React from "react";

import * as Styled from "./styles";

type Props = {
  to: string;
  children: string | JSX.Element;
};

const Link: React.FC<Props> = ({ to, children }) => {
  return <Styled.Link to={to}>{children}</Styled.Link>;
};

export default Link;
