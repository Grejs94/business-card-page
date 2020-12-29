import {
  ProgramingPage,
  ProfessionalHistoryPage,
  AboutMePage,
} from "pages/index";

type Route = {
  path: string;
  component: () => JSX.Element;
  exact?: boolean;
};

export const mainRoutes: Route[] = [
  {
    path: "/",
    component: ProgramingPage,
    exact: true,
  },
  {
    path: "/history",
    component: ProfessionalHistoryPage,
  },
  {
    path: "/aboutMe",
    component: AboutMePage,
  },
];
