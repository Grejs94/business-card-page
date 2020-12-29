import React from "react";

import Link from "utils/Link/index";

import * as Styled from "./styles";

type Props = {};

const SubPagesList: React.FC<Props> = () => {
  const subpages = [
    {
      title: "Frontend",
      links: ["TechStack", "Projekty", "Doświadczenie", "Kursy"],
      to: "/",
    },
    { title: "K. zawodowa", to: "/history" },
    { title: "O mnie", to: "/aboutMe" },
  ];

  const handleClick = (section: string) => {
    setTimeout(() => {
      const element = document.querySelector(`#${section}`);

      if (!!element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

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
                <Styled.SublinkParagraph key={link}>
                  <Link to={page.to} handleClick={() => handleClick(link)}>
                    {link}
                  </Link>
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
