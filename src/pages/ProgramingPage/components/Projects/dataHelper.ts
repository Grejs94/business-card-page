// import * as shopperPicture from "pictures/Projects/Shopper";
// import * from "pictures/index";
import * as picture from "pictures";

export const data = [
  {
    projectName: "Shopper",
    projectsTitle: "Shopper",
    projectDescription: [
      "Projekt Shopper to zaawansowana aplikacja, której największą zaletą jest tworzenie inteligentnej listy zakupów. Analizując wszystkie daty zakupu danego produktu z historii zakupów oblicza cykliczność. A następnie biorąc pod uwagę czas, który upłynął od ostatniego zakupu, pokazuje to, czego z ogromnym prawdopodobieństwem najbardziej potrzebujemy. Shopper alternatywnie sortuje również wg najczęściej kupowanych produktów.",
      "Dane o elementach koszyka są zrobione w pliku JSON a aplikacja komunikuje się poprzez API używając fake serwera json-server. Właśnie z tego powodu nie wstawiłem linku do projektu planuję to zrobić po nauczeniu się podstaw back-endu na tyle, aby aplikacja działała.",
      "Aby uruchomić aplikacje lokalnie, w konsoli konieczne jest wpisanie komendy 'npm run start:db'",
    ],
    images: [
      { img: picture.Basket_11, id: 1, show: true },
      { img: picture.Basket_12, id: 2, show: true },
      { img: picture.Basket_13, id: 3, show: true },
      { img: picture.Basket_21, id: 4, show: false },
      { img: picture.Basket_22, id: 5, show: false },
      { img: picture.Basket_23, id: 6, show: false },
      { img: picture.Basket_24, id: 7, show: false },
      { img: picture.Basket_25, id: 8, show: false },
      { img: picture.Basket_26, id: 9, show: false },
      { img: picture.Basket_31, id: 10, show: false },
      { img: picture.Basket_32, id: 11, show: false },
      { img: picture.Basket_33, id: 12, show: false },
      { img: picture.Basket_34, id: 13, show: false },
      { img: picture.Basket_35, id: 14, show: false },
    ],
    link: "https://github.com/Grejs94/Shopper",
  },
  {
    projectName: "Books",
    projectsTitle: "Books - recruitment task",
    projectDescription: [
      "Books to uproszczona aplikacja do zamawiania książek, umożliwia dodanie książek do koszyka i edytowanie ich liczby lub usunięcie za pomocą przycisku. Finalna podstrona zawiera zwalidowany wg zaleceń formularz, który wysyła zamówienie również z pomocą API.",
      "Aplikacja używa swagger mock server w nadrzędnym folderze, aby uruchomić projekt lokalnie należy się posilić instrukcją w pliku README.",
    ],
    images: [
      { img: picture.Books_1, id: 1, show: false },
      { img: picture.Books_2, id: 2, show: true },
      { img: picture.Books_3, id: 3, show: false },
      { img: picture.Books_4, id: 4, show: true },
      { img: picture.Books_5, id: 5, show: false },
      { img: picture.Books_6, id: 6, show: false },
      { img: picture.Books_7, id: 7, show: true },
      { img: picture.Books_8, id: 8, show: false },
      { img: picture.Books_9, id: 9, show: false },
      { img: picture.Books_10, id: 10, show: false },
      { img: picture.Books_11, id: 11, show: false },
    ],
    link: "https://github.com/Grejs94/BooksShopTS",
  },
  {
    projectName: "Trons",
    projectsTitle: "Trons wallets - recruitment task",
    projectDescription: [
      "Krótkie zadanie sprawdzające umiejętność ściągania danych z API TRON i wyświetlanie ich w formie tablicy z możliwością sortowania oraz filtrowania.",
      "Portfele tron przechodzą walidację i tylko istniejące zwracają dane.",
    ],
    images: [
      { img: picture.Wallets_1, id: 1, show: true },
      { img: picture.Wallets_2, id: 2, show: true },
      { img: picture.Wallets_3, id: 3, show: true },
      { img: picture.Wallets_4, id: 4, show: false },
      { img: picture.Wallets_5, id: 5, show: false },
      { img: picture.Wallets_6, id: 6, show: false },
    ],
    link: "https://github.com/Grejs94/-Example-TRON-Wallets",
    weblink: "https://priceless-brahmagupta-c3fa2b.netlify.app/",
  },
  {
    projectName: "Basket",
    projectsTitle: "Basket page - recruitment task",
    projectDescription: [
      "Zadanie sprawdzające umiejętność odwzorowania strony z załączonego w poleceniu zdjęcia.",
      "Aplikacja dolicza koszt transportu w sytuacji, gdy cena zamówienia nie przekracza 100$.",
    ],
    images: [
      { img: picture.BasketPage_1, id: 1, show: true },
      { img: picture.BasketPage_2, id: 2, show: true },
      { img: picture.BasketPage_3, id: 3, show: true },
    ],
    link: "https://github.com/Grejs94/RecruitmentTask_CodeConcept",
    weblink: "https://pedantic-banach-033ac9.netlify.app/",
  },
];
