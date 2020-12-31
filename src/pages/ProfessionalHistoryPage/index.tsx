import React from "react";

import { A4 } from "pictures/Gardens";
import { C2 } from "pictures/Grills";
import { protonet, www } from "pictures";

import * as Styled from "./styles";

const ProfessionalHistoryPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.SectionWrapper>
        <Styled.SectionTitle>
          Pielęgnowanie i wykonywanie ogrodów
        </Styled.SectionTitle>
        <Styled.ImageWrapper>
          <Styled.HeroImg src={A4} />
        </Styled.ImageWrapper>
        <p>
          Będac jeszcze w szkole średniej zacząłem przygodę z ogrodami.
          Stopniowo przejmowałem coraz więcej obowiązków aż do całkowicie
          samodzielnego wykonywania ogrodów od A do Z.
        </p>
        <p>
          Analizując wpływ klimatu i możliwość pracy tylko przez 6-8 miesięcy,
          podjąłem decyzję o przebranżowieniu się i pracę w bardziej stałym
          zawodzie.
        </p>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <Styled.SectionTitle>
          Ręcznie robione grille ogrodowe wykonywane w pełni na terenie zakładu
        </Styled.SectionTitle>
        <Styled.ImageWrapper>
          <Styled.HeroImg src={C2} />
        </Styled.ImageWrapper>
        <p>
          Produkt który wykonywaliśmy był kompoletną kuchnią ogrodową która była
          ozdobą dla całego ogródu i zarazem profesjonalym połączeniem
          tradycyjnego pieca chlebowego, w pełni załtomatyzowanej wędzarni oraz
          tradycyjnego grilla ogrodowego.
        </p>
        <p>
          Produkt był dobrym ale również niszowym kompleksem dla klientów
          premium. Wysokie koszty pozyskania klienta oraz bardzo trudne warunki
          pracy szczególnie zimą sprawiły że kolejny raz postanowiłem zmienić
          zawód.
        </p>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <Styled.SectionTitle>Internet Światłowodowy</Styled.SectionTitle>
        <Styled.ImageWrapper>
          <Styled.HeroImg src={protonet} />
        </Styled.ImageWrapper>
        <p>
          W międzyczasie od 2014-01-15 jestem właścielem firmy protonet Gracjan
          Ludyga która wchodzi w skład kilku rodzinnych firm pod wspólnym
          członem protonet. Firma w żaden sposób nie wpływała na mój czas pracy.
        </p>
        <p>
          Poświęcam na nią jedynie kilka godzin w miesiącu w wyjątkowych
          sytuacjach (wizyty u notariusza w sprawie spółek, umowy kredytowe,
          podpisywanie ważnych dokumentów firmowych.)
        </p>
      </Styled.SectionWrapper>
      <Styled.SectionWrapper>
        <Styled.SectionTitle>Projektowanie stron WWW</Styled.SectionTitle>
        <Styled.ImageWrapper>
          <Styled.HeroImg src={www} />
        </Styled.ImageWrapper>
        <p>
          Gdy zaczynałem ogrody uczyłem się również projektować strony www,
          posiadałem kilka płyt, html, css jeszczce nie był popularny, flash
          oraz joomla była to krótka przygoda.
        </p>
        <p>
          Gdy wykonywałem jeszcze grille ogrodowe wykonałem stronę używając
          generatora wix.
        </p>
        <p>
          od maja 2019 całkowicie poświęciłem sie nauce projektowania stron jak
          sie później moim upatrzonym kierunkiem stał się frontend.
        </p>
        <p>Gorąco zapraszam do współpracy.</p>
      </Styled.SectionWrapper>
    </Styled.Wrapper>
  );
};

export default ProfessionalHistoryPage;
