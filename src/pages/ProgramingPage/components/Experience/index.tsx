import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

import { Link } from "utils";

import { SectionTitle } from "pages/ProgramingPage/styles";
import { description, images } from "./dataHelper";
import * as Styled from "./styles";

type Props = {};

const Experience: React.FC<Props> = () => {
  return (
    <div>
      <SectionTitle>Doświadczenie</SectionTitle>
      <span>{description}</span>
      <Styled.Grid>
        {images.map((image) => (
          <Styled.ImageContainer>
            <Styled.Img src={image} alt="Pictures of code-review screenshot" />
          </Styled.ImageContainer>
        ))}
      </Styled.Grid>
      <Styled.LinkContainer>
        Link do Pull-requestów:
        <Styled.Link
          href="https://github.com/pulls?q=is%3Apr+author%3AGrejs94+archived%3Afalse+is%3Aclosed"
          target="_blank"
        >
          <GitHubIcon />
        </Styled.Link>
      </Styled.LinkContainer>
    </div>
  );
};

export default Experience;
