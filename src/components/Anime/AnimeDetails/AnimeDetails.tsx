import React, { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./AnimeDetails.module.scss";
import {
  IAnimeFull,
  IAnimeRecommendation,
} from "../../../types/jikanMoe/jikan";
import Title from "../../../UI/Title/Title";
import { AnimeService } from "../../../services/AnimeService";
import { IAnimePicture } from "../../../types/jikanMoe/jikan";
import Image from "../../../UI/Image/Image";
import { ISingleAnime } from "../../../types/anime/anime-single";
import Carousel from "../../../UI/Carousel/Carousel";
import { smallLimitedCarouseIOptions } from "../../Carousel/CarouselBlock/media-options";
import { IAnime } from "../../../types/jikanMoe/jikan";
import AnimeItem from "../AnimeItem/AnimeItem";
import Sidebar from "../../../UI/Sidebar/Sidebar";
import AnimeItemSmall from "../AnimeItemSmall/AnimeItemSmall";
import { getShortenedString } from "../../../utils/utils";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { publicRoutes } from "../../AppRouter/routes";
import AnimeItemPreview from "../AnimeItemPreview/AnimeItemPreview";
import ContentLoader from "react-content-loader";

interface AnimeDetailsProps {
  anime: IAnimeFull | null;
  //   animePictures: IAnimePicture[] | [];
  //   similarAnime: IAnimeRecommendation[];
}

const AnimeDetails: FC<AnimeDetailsProps> = ({
  //   similarAnime,
  anime,
  //   animePictures,
}) => {

  const { animeRecommendations, animeSeason: animeCurrentSeason } = useTypedSelector(
    (state) => state.anime
  );

  const fetchAnime = async () => {
    // const seasonAnime = await AnimeService.getAnimeSeasonNow({ limit: 10 });
    // setAnimeCurrentSeason(seasonAnime);
  };

  useEffect(() => {
    fetchAnime();
  }, []);


  if (!anime) return <></>;

  return (
    <section className={classes["anime-details"]}>
      <div
        className={classes["anime-details__container"] + " " + "_container1800"}
      >
        <div className={classes["anime-details__main"]}>
          <div className={classes["description"]}>
            <Title value={"Characters"} />
            <p className={classes["description__body"]}>{anime?.synopsis}</p>
          </div>

          <div className={classes["description"]}>
            <Title value={"Synopsis"} />
            <p className={classes["description__body"]}>
              {anime?.synopsis || "Nothing yet."}
            </p>
          </div>

          <div className={classes["trailer"]}>
            <Title value={"Trailer"} />
            <div className={classes["trailer__video"]}>
              <iframe
                src={`${anime?.trailer.embed_url}?mute=1`}
                width="397"
                height="345"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* <div className={classes["images"]}>
            <Title value={"Images"} />
            <div className={classes["images__container"]}>
              {animePictures.map((picture, index) => (
                <Image url={picture.jpg.image_url} key={index} />
              ))}
            </div>
          </div> */}

          {animeRecommendations.length > 5 && (
            <div className={classes["carousel"]}>
              <Title value={"You may also like"} />
              <Carousel options={smallLimitedCarouseIOptions} arrowTop={40}>
                {animeRecommendations.map((item, index) => (
                  // <AnimeItem anime={item} key={index} />
                    <AnimeItemPreview anime={item} key={index}/>
                ))}
              </Carousel>
            </div>
          )}
        </div>

        <div className={classes["anime-details__sidebar"]}>
          <Title value="Airing Now" />
          <Sidebar>
            {animeCurrentSeason.length !== 0
                ?
                animeCurrentSeason.map((anime, index) => (
                        <AnimeItemSmall anime={anime} key={index} />
                    ))
                :
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                  <ContentLoader
                    key={index}
                    speed={2}
                    className={classes["skeleton__item-small"]}
                    foregroundColor="var(--background-secondary)"
                    backgroundColor="var(--background-skeleton)"
                  >
                    <rect x="0" y="0" rx="2" ry="2" width="466" height="139" />
                  </ContentLoader>
                ))
            }
          
          </Sidebar>
        </div>
      </div>
    </section>
  );
};

export default AnimeDetails;
