import React from "react";
import ContentLoader from "react-content-loader";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Carousel from "../../../UI/Carousel/Carousel";
import { bigCarouselOptions } from "../../../UI/Carousel/media-options";
import { getCurrentSeasonName } from "../../../utils/utils";
import AnimeItemBig from "../../Anime/AnimeItemBig/AnimeItemBig";
import CarouselBlockItem from "../CarouselBlockItem/CarouselBlockItem";

import classes from "./CarouselBig.module.scss";

const CarouselBig = () => {
   const { animeSeason } = useTypedSelector((state) => state.anime);

   return (
      <div className={classes["anime"]}>
         <div className={[classes["anime__container"], "_container-big"].join(" ")}>
            <Carousel options={bigCarouselOptions} arrowTop={48} arrowSize={"big"}>
               {animeSeason.length !== 0
                  ? animeSeason.map((item, index) => <AnimeItemBig anime={item} key={index} />)
                  : [...new Array(5)].map((item, index) => (
                       <ContentLoader
                          key={index}
                          speed={2}
                          className={classes["skeleton__big"]}
                          foregroundColor="var(--background-300)"
                          backgroundColor="var(--background-skeleton)"
                       >
                          <rect x="0" y="0" rx="2" ry="2" width="342" height="548" />
                       </ContentLoader>
                    ))}
            </Carousel>
         </div>
      </div>
   );
};

export default CarouselBig;
