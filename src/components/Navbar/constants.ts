import { publicRoutes } from "../AppRouter/routes";

export const navbarLinks: { value: string; path: string }[] = [
  { value: "Catalog", path: publicRoutes.ANIME },
  { value: "New", path: publicRoutes.ANY },
  { value: "Random anime", path: publicRoutes.RANDOM },
];
