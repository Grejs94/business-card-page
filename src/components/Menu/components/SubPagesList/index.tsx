import React from "react";

import { Link } from "utils";

import * as Styled from "./styles";

type Props = {};

const SubPagesList: React.FC<Props> = () => {
  const subpages = [
    {
      title: "Programowanie",
      links: ["Technologie", "Projekty", "Doświadczenie", "Ukończone kursy"],
      to: "/technologies",
    },
    { title: "Historia zawodowa", to: "/history" },
    { title: "O mnie", to: "/aboutMe" },
  ];

  return (
    <Styled.SubPagesContainer>
      {subpages.map((page) => (
        <Styled.LinkContainer key={page.title}>
          <Link to={page.to}>{page.title}</Link>
        </Styled.LinkContainer>
      ))}
    </Styled.SubPagesContainer>
  );
};

export default SubPagesList;
