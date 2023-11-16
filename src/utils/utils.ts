import { filterGenreOptions, filterStatusOptions, filterTypeOptions } from "../components/Anime/AnimeFilter/constants";
import { IAnimeSearchParams } from "../types/jikanMoe/jikan";
import { IFilterOption } from "../types/types";

export const getAnimeEpisodeUrl = (baseUrl: string, animeTitle: string, episode: number): string => {
   let animeTitleNew = animeTitle
      .toLowerCase()
      .replaceAll("-", "")
      .replaceAll("[", "")
      .replaceAll("]", "")
      .replaceAll(":", "")
      .replaceAll(".", "")
      .replaceAll(",", "")
      .replaceAll("!", "")
      .replaceAll(" ", "-")
      .replaceAll("--", "-");
   let episodeNew = `episode-${episode}`;
   const result = `${baseUrl}${animeTitleNew}-${episodeNew}`;

   return result;
};

export const getActivityDays = (days: number): number => {
   let currentDay = new Date().getDay();
   if (currentDay === 0) return days;
   if (currentDay === 1) return days - 6;
   if (currentDay === 2) return days - 5;
   if (currentDay === 3) return days - 4;
   if (currentDay === 4) return days - 3;
   if (currentDay === 5) return days - 2;
   if (currentDay === 6) return days - 1;
   return days;
};



export const getAnimeParamId = (value: string, type: string): string => {
   let result;

   switch (type) {
      case "type":
         result = filterTypeOptions.find((element) => element.label.toLowerCase() === value.toLowerCase());
         return result?.value || "";

      case "genres":
         result = filterGenreOptions.find((element) => element.label.toLowerCase() === value.toLowerCase());
         return result?.value || "";

      case "status":
         result = filterStatusOptions.find((element) => element.label.toLowerCase() === value.toLowerCase());
         return result?.value || "";

      default:
         return "";
   }
};

export const deleteEmptyProperties = (obj: IAnimeSearchParams): IAnimeSearchParams => {
   for (const [key, value] of Object.entries(obj)) {
      if (!value) {
         if (obj.hasOwnProperty(key)) delete obj[key as keyof IAnimeSearchParams];
      }
   }
   return obj;
};

export const getAnimeEpisodeSrc = (hostUrl: string, streamingLink: string): string => {
   let i = 0;
   while (i < streamingLink.length) {
      if (streamingLink.slice(i, i + 3) === "id=") break;
      i++;
   }

   const result = `${hostUrl}${streamingLink.slice(i)}`;
   return result;
};

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

// export const getScoreStyles = (color: "green" | "light-green" | "red" | "grey"): {} => {
//    const scoreStyles = {
//     green: { color: "#ffffff", backgroundColor: "red" },
//     grey: { color: "#ffffff", backgroundColor: "grey" },
//  };
// };

export const getDateFromTimeStamp = (timestamp: string): Date => {
   let date = new Date(Date.parse(timestamp));
   return date;
};

export const getExactTimeFromDate = (date: Date): string => {
   let exactTime = `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()} in ${
      date.getHours() >= 10 ? date.getHours() : "0" + String(date.getHours())
   }:${date.getMinutes() >= 10 ? date.getMinutes() : "0" + String(date.getMinutes())}`;
   return exactTime;
};

// export const getShortDate = (date: Date): string => {
//     let exactTime = `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()} in ${
//        date.getHours() >= 10 ? date.getHours() : "0" + String(date.getHours())
//     }:${date.getMinutes() >= 10 ? date.getMinutes() : "0" + String(date.getMinutes())}`;
//     return exactTime;
//  };

export const getMonthName = (month: number): string => {
   const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septemper",
      "October",
      "November",
      "December",
   ];
   return months[month];
};

export const getAnimeField = (field: string | number | undefined): string => {
   if (typeof field === "object") return "";
   if (typeof field == "undefined") return "";

   return String(field);
};

export const getShortenedString = (value: string | undefined, maxLetters: number) => {
   if (!value) return "";
   return value.length > maxLetters ? value.slice(0, maxLetters) + "..." : value;
};

export const getCurrentYear = (): number => {
   const date = new Date();
   return date.getFullYear();
};

export const splitNumberByThree = (number: number): string => {
   const newNumber = String(new Intl.NumberFormat("ru-RU").format(number));
   return newNumber;
};

export const getFilterOptionsSingle = (options: IFilterOption[], param: string): IFilterOption[] => {
   //    console.log(param);
   //    console.log(options);

   return options.filter((option) => param === option.value);
};

export const getFilterOptionsMulti = (options: IFilterOption[], param: string): IFilterOption[] => {
   let paramItems = param.split(",");
   //    console.log(param.split(","));

   let result = options.filter((option) => paramItems.includes(option.value));
   //    console.log(result);

   //    console.log(result.length);

   // if (result.length > 1) result = [result[0], {value: "-1", label: `+${result.length-1}`}]
   const optionsMoreCount = result.length - 1;

   if (optionsMoreCount > 0) result.splice(1, 0, { value: "data-count", label: `+${optionsMoreCount}` });

   return result;
};

// export const deleteEmptyParams = (obj: IAnimeSearchParams): IAnimeSearchParams => {
//    for (const [key, value] of Object.entries(obj)) {
//       if (!value) {
//          if (obj.hasOwnProperty(key)) delete obj[key as keyof IAnimeSearchParams];
//       }
//    }
//    return obj;
// };

export const getCurrentSeasonName = (): string => {
   const currentMonth = new Date().getMonth();
   let currentSeason = "Winter";
   if (currentMonth < 3 || currentMonth === 11) currentSeason = "Winter";
   else if (currentMonth < 6) currentSeason = "Spring";
   else if (currentMonth < 9) currentSeason = "Summer";
   else if (currentMonth < 11) currentSeason = "Autumn";

   return currentSeason;
};

export const toggleStringElement = (arr: string[], item: string | undefined) => {
   if (!item) return arr;
   let newArray: string[] = [""];
   if (arr.includes(item)) {
      newArray = arr.filter((i) => i !== item);
   } else {
      console.log(arr);

      arr.pop();
      console.log(arr);
      newArray = [...arr, item];
   }

   //    const newArr = arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];
   return newArray.length > 0 ? newArray : [""];
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
