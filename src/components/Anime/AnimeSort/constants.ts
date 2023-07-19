import { ISelectOption } from "../../../types/user-inteface";

export const sortCategories: ISelectOption[] = [
  { name: "By Date", order_by: "start_date", sort: "desc" },
  { name: "By Popularity", order_by: "scored_by", sort: "desc" },
  { name: "By Rating", order_by: "score", sort: "desc" },
  { name: "By Name", order_by: "title", sort: "asc" },
];
