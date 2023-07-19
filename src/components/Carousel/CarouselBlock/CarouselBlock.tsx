import React, { useState, useEffect } from "react";
import { IAnime } from "../../../types/jikanMoe/jikan";
import { AnimeService } from "../../../services/AnimeService";
import classes from "./CarouselBlock.module.scss";
import CarouselBlockItem from "../CarouselBlockItem/CarouselBlockItem";
import * as MEDIA_OPTIONS from "./media-options";
import { getCurrentSeasonName } from "../../../utils/utils";
import AnimeItem from "../../Anime/AnimeItem/AnimeItem";
import AnimeItemBig from "../../Anime/AnimeItemBig/AnimeItemBig";

const CarouselBlock = () => {
  const [animeCurrentSeason, setAnimeCurrentSeason] = useState<IAnime[]>([]);

  const fetchAnime = async () => {
    const seasonAnime = await AnimeService.getAnimeSeasonNow();
    const popularAnime = await AnimeService.getAnimeSeasonNow();
    const dateAnime = await AnimeService.getAnimeSeasonNow();
    setAnimeCurrentSeason(seasonAnime);
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  if (!animeCurrentSeason) return <></>;

  return (
    <section className={classes["carousel-block"]}>
      <div className={"_container1800"}>
        <div className={classes["carousel-block__body"]}>
          <CarouselBlockItem
            title={`${getCurrentSeasonName()} season`}
            options={MEDIA_OPTIONS.bigCarouselOptions}
          >
            {animeCurrentSeason.map((item, index) => (
              <AnimeItemBig anime={item} key={index} />
            ))}
          </CarouselBlockItem>

          <CarouselBlockItem
            title={`Anime for you`}
            options={MEDIA_OPTIONS.smallCarouselOptions}
            arrowTop={40}
          >
            {animeCurrentSeason.map((item, index) => (
              <AnimeItem anime={item} key={index} />
            ))}
          </CarouselBlockItem>

          <CarouselBlockItem
            title={"Popular"}
            options={MEDIA_OPTIONS.smallCarouselOptions}
            arrowTop={40}
          >
            {animeCurrentSeason.map((item, index) => (
              <AnimeItem anime={item} key={index} />
            ))}
          </CarouselBlockItem>

          <CarouselBlockItem
            title={"A-Z"}
            options={MEDIA_OPTIONS.smallCarouselOptions}
            arrowTop={40}
          >
            {animeCurrentSeason.map((item, index) => (
              <AnimeItem anime={item} key={index} />
            ))}
          </CarouselBlockItem>
        </div>
      </div>
    </section>
  );
};

export default CarouselBlock;
