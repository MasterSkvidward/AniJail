import { IFilterOption } from "../types/types";

export const getAnimeScore = (score: number | undefined): string => {
  if (!score) return "-";

  return String(score.toFixed(2));
};

export const getScoreColor = (score: number): string => {
  if (score >= 8) return "green";
  if (score >= 7 && score < 8) return "light-green";
  if (score >= 5 && score < 7) return "grey";
  else return "red";
};

export const getAnimeField = (field: string | number | undefined): string => {
  if (typeof field === "object") return "";
  if (typeof field == "undefined") return "";

  return String(field);
};

export const getShortenedString = (
  value: string | undefined,
  maxLetters: number
) => {
  if (!value) return "";
  return value.length > maxLetters
    ? value.slice(0, maxLetters).trim() + "..."
    : value;
};

export const getCurrentYear = (): number => {
  const date = new Date();
  return date.getFullYear();
};

export const splitNumberByThree = (number:number): string => {
    const newNumber = String(new Intl.NumberFormat('ru-RU').format(number));
    return newNumber;
}

export const getFilterOptions = (
  options: IFilterOption[],
  param: string
): IFilterOption[] => {
  let paramItems = param.split(",");
  return options.filter((option) => paramItems.includes(option.value));
};

export const getCurrentSeasonName = (): string => {
  const currentMonth = new Date().getMonth();
  let currentSeason = "Winter";
  if (currentMonth < 3 || currentMonth === 11) currentSeason = "Winter";
  else if (currentMonth < 6) currentSeason = "Spring";
  else if (currentMonth < 9) currentSeason = "Summer";
  else if (currentMonth < 11) currentSeason = "Autumn";

  return currentSeason;
};

export async function get_average_rgb(src: string): Promise<Uint8ClampedArray> {
  return new Promise((resolve) => {
    let context = document.createElement("canvas").getContext("2d");
    context!.imageSmoothingEnabled = true;

    let img = new Image();
    img.src = src;
    img.crossOrigin = "";

    img.onload = () => {
      context!.drawImage(img, 0, 0, 1, 1);
      resolve(context!.getImageData(0, 0, 1, 1).data.slice(0, 3));
    };
  });
}
