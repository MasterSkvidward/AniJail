import { publicRoutes } from "./routes";
import { ISelectOption, IWatchCategory } from "../types/userInteface";
import { IAnimeSearchParams } from "../types/jikanMoe/jikan";

export const navbarLinks: { value: string; path: string }[] = [
  { value: "Catalog", path: publicRoutes.ANIME },
  { value: "New", path: publicRoutes.ANY },
  { value: "Random anime", path: publicRoutes.ANY },
];

export const bigCarouselOptions = {
  speed: 600,
  // height : '275px',
  rewind: true,
  gap: "20px",
  interval: 7000,
  autoplay: true,
  lazyLoad: "nearby",
  perPage: 5,
  // fixedWidth: 190,
  arrows: true,
  // arrowPath: arrowRight,

  breakpoints: {
    1920: { gap: "15px" },
    1775: { perPage: 4 },
    1300: { perPage: 3 },
    720: { perPage: 2 },
  },
};

export const smallCarouselOptions = {
  speed: 600,
  // height : '275px',
  rewind: true,
  gap: "20px",
  interval: 7000,
  autoplay: true,
  lazyLoad: "nearby",
  perPage: 9,
  // fixedWidth: 190,
  arrows: true,
  // arrowPath: arrowRight,

  breakpoints: {
    // 4500: {autoWidth: true},
    1920: { perPage: 8 },
    // 1712: {perPage: 8},
    1580: { perPage: 7 },
    1428: { perPage: 6 },
    1220: { perPage: 5 },
    1070: { perPage: 4 },
    820: { perPage: 3 },
  },
};

export const smallLimitedCarouseIOptions = {
  speed: 600,
  // height : '275px',
  rewind: true,
  gap: "27px",
  interval: 5000,
  autoplay: true,
  lazyLoad: "nearby",
  perPage: 6,
  // fixedWidth: 190,
  arrows: true,
  // arrowPath: arrowRight,

  breakpoints: {
    // 4500: {autoWidth: true},
    // 1920: {perPage: 6},
    // 1712: {perPage: 8},
    1630: { perPage: 5, gap: "25px" },
    1500: { perPage: 7 },
    1340: { perPage: 6 },
    1160: { perPage: 5 },
    950: { perPage: 4 },
  },
};

export const sortCategories: ISelectOption[] = [
  { name: "By Date", order_by: "start_date", sort: "desc" },
  { name: "By Popularity", order_by: "scored_by", sort: "desc" },
  { name: "By Rating", order_by: "score", sort: "desc" },
  { name: "By Name", order_by: "title", sort: "asc" },
];

export const defaultFilterParams: IAnimeSearchParams = {
  order_by: "scored_by",
  sort: "desc",
  page: 1,
};

export const filterTypeOptions = [
  { value: "tv", label: "TV" },
  { value: "movie", label: "Movie" },
  { value: "ova", label: "OVA" },
  { value: "special", label: "Special" },
  { value: "ona", label: "ONA" },
  { value: "music", label: "Music" },
];

export const filterGenreOptions = [
  { value: "1", label: "Action" },
  { value: "2", label: "Adventure" },
  // {value: '3', label: 'Racing'},
  { value: "4", label: "Comedy" },
  // {value: '5', label: 'Avant Garde'},
  { value: "6", label: "Mythology" },
  { value: "7", label: "Mystery" },
  { value: "8", label: "Drama" },
  { value: "9", label: "Ecchi" },
  { value: "10", label: "Fantasy" },
  // {value: '11', label: 'Nythology'},
];

export const filterAgeOptions = [
  { value: "g", label: "G" },
  { value: "pg", label: "PG" },
  { value: "pg13", label: "PG-13" },
  { value: "r17", label: "R" },
  { value: "r", label: "R+" },
];

export const filterStatusOptions = [
  { value: "airing", label: "Airing" },
  { value: "complete", label: "Complete" },
  { value: "upcoming", label: "Upcoming" },
];

export const watchListHeadlines = ["№", "Name", "Score", "Type"];

export const watchCategories: IWatchCategory[] = [
  { name: "Viewed", accessor: "viewed" },
  { name: "Will Watch", accessor: "will_watch" },
  { name: "Favorite", accessor: "favorite" },
];
