import { publicRoutes } from "../AppRouter/routes";

export const navbarLinks: { value: string; path: string }[] = [
   { value: "Top 100", path: publicRoutes.ANIME },
   { value: "Catalog", path: publicRoutes.ANIME },
   { value: "Characters", path: publicRoutes.ANY },
   { value: "Current Season", path: publicRoutes.ANY },
   { value: "Random anime", path: publicRoutes.RANDOM },
];
