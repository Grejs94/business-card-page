import React from "react";

import { Scroll_Top } from "pictures";
import * as Styles from "./styles";

const ScrollTop = ({ value }) => {
  const checkpoint = value;
  let opacity = 0;
  let display = "none";

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      display = "none";
      opacity = 0;
    } else {
      display = "flex";
      opacity = currentScroll * 0.0008;
    }

    const element = document.querySelector("#scroll");

    if (!!element) {
      element.style.opacity = opacity;
      element.style.display = display;
    }
  });

  return (
    <Styles.SymbolContainer id="scroll">
      <Styles.Img
        src={Scroll_Top}
        onClick={() =>
          document.body.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
        }
        alt="scroll top icon"
      />
    </Styles.SymbolContainer>
  );
};

export default ScrollTop;
