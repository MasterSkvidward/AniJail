import { IWatchCategory } from "../../../types/user-inteface";

export const watchCategories: IWatchCategory[] = [
  { name: "Viewed", accessor: "viewed" },
  { name: "Will Watch", accessor: "will_watch" },
  { name: "Favorite", accessor: "favorite" },
];
