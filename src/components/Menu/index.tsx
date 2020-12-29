import React from "react";
import * as Picture from "pictures";

import { SubPagesList } from "./components";
import * as Styled from "./styles";

type Props = {};

const Menu: React.FC<Props> = () => {
  return (
    <Styled.MenuContainer>
      <Styled.Avatar alt="Remy Sharp" src={Picture.MeInOffice} />
      <Styled.Paragraph>Gracjan Ludyga</Styled.Paragraph>
      <Styled.Paragraph>Frontend Developer</Styled.Paragraph>
      <SubPagesList />
    </Styled.MenuContainer>
  );
};

export default Menu;
