import { IRowObjectInfo } from "../types/types";
import { IFilterOption } from "../types/types";
import { MultiValue } from "react-select";

export const formatGenres = (genres: IRowObjectInfo[] | undefined): string[] => {
   if (!genres) return ["-"];
   return genres.map((genre) => `${genre.name}`);
};

export const formatFilterValues = (filterTypeOptions: MultiValue<IFilterOption>): string => {
   return filterTypeOptions.map((option) => option.value).join(",");
};

export const formatColor = (color: string): string => {
   let arr = color.split(",").map((item) => Number(item));
   if (arr[0] + arr[1] + arr[2] > 520) arr = [130, 30, 30];
   return arr.join(",");
};
