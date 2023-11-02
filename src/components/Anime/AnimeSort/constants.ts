import { ISelectOption } from "../../../types/user-inteface";

export const sortCategories: ISelectOption[] = [
  { name: "Date", order_by: "start_date", sort: "desc" },
  { name: "Popularity", order_by: "scored_by", sort: "desc" },
  { name: "Rating", order_by: "score", sort: "desc" },
  { name: "Name", order_by: "title", sort: "asc" },
];
