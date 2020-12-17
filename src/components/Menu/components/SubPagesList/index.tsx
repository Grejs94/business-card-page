import React from "react";

import { Link } from "utils";

import * as Styled from "./styles";

type Props = {};

const SubPagesList: React.FC<Props> = () => {
  const subpages = [
    {
      title: "Frontend",
      links: ["Tech. stack", "Projekty", "Staż", "Kursy"],
      to: "/",
    },
    { title: "K. zawodowa", to: "/history" },
    { title: "O mnie", to: "/aboutMe" },
  ];

  return (
    <Styled.PagesContainer>
      {subpages.map((page) => (
        <Styled.LinkContainer key={page.title}>
          <Styled.LinkParagraph>
            <Link to={page.to}>{page.title}</Link>
          </Styled.LinkParagraph>
          {page.links ? (
            <Styled.SubLinksContainer>
              {page.links.map((link) => (
                <Styled.SublinkParagraph>
                  <Link to={page.to}>{link}</Link>
                </Styled.SublinkParagraph>
              ))}
            </Styled.SubLinksContainer>
          ) : null}
        </Styled.LinkContainer>
      ))}
    </Styled.PagesContainer>
  );
};

export default SubPagesList;
