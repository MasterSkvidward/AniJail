export interface IFilterOptions {
   value: string;
   label: string;
}

export const filterTypeOptions: IFilterOptions[] = [
   { value: "tv", label: "TV" },
   { value: "movie", label: "Movie" },
   { value: "ova", label: "OVA" },
   { value: "special", label: "Special" },
   { value: "ona", label: "ONA" },
   { value: "music", label: "Music" },
];

export const filterGenreOptions: IFilterOptions[] = [
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

export const filterAgeOptions: IFilterOptions[] = [
   { value: "g", label: "G" },
   { value: "pg", label: "PG" },
   { value: "pg13", label: "PG-13" },
   { value: "r17", label: "R" },
   { value: "r", label: "R+" },
];

export const filterStatusOptions: IFilterOptions[] = [
   { value: "airing", label: "Currently Airing" },
   { value: "complete", label: "Finished Airing" },
   { value: "upcoming", label: "Not Yet Aired" },
];

// export const filterSourceOptions = [
//    { value: "airing", label: "Airing" },
//    { value: "complete", label: "Complete" },
//    { value: "upcoming", label: "Upcoming" },
// ];

export const filterProducersOptions: IFilterOptions[] = [
   { value: "10", label: "Production I.G" },
   { value: "53", label: "Dentsu" },
   { value: "16", label: "TV Tokyo" },
   { value: "17", label: "Aniplex" },
];
