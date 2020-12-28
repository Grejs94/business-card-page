import * as shopperPicture from "pictures/Projects/Shopper";

export const data = [
  {
    projectsTitle: "Shopper",
    projectDescription:
      "Projekt Shopper to zaawansowana aplikacja której największą zaletą jest tworzenie inteligentnej listy zakupów. Analizując wszystkie daty zakupu danego produktu z historii zakupów oblicza cykliczność. A następnie biorąc pod uwage czas który upłynął od ostatniego zakupu pokazuje to czego z ogromnym prawdopodobieństwem najbardziej potrzebujemy. Shopper alternatywnie sortuje również wg najczęściej kupowanych produktów.",
    images: [
      { img: shopperPicture.Basket_11, id: 1, show: true },
      { img: shopperPicture.Basket_12, id: 2, show: true },
      { img: shopperPicture.Basket_13, id: 3, show: false },
    ],
  },
];
