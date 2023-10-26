export interface IAnimeEpisode {
   download: string;
   source: { url: string; quality: string; isM3U8: boolean }[];
}

export interface IAnimeEpisodeResponse {
   data: IAnimeEpisode;
}
