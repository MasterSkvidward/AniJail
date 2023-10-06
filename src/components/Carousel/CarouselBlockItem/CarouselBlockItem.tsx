import React, { FC, useState, useEffect, PropsWithChildren } from "react";
import Carousel from "../../../UI/Carousel/Carousel";

import classes from "./CarouselBlockItem.module.scss";
import AnimeItem from "../../Anime/AnimeItem/AnimeItem";
import { IAnime } from "../../../types/jikanMoe/jikan";
import { AnimeService } from "../../../services/AnimeService";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

interface CarouselBlockItemProps extends PropsWithChildren {
  title: string;
  options?: any;
  arrowTop?: number;
}

const CarouselBlockItem: FC<CarouselBlockItemProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <div className={classes["carousel-item"]}>
      <h3 className={classes["carousel-item__title"]}>{title}</h3>
      <div className={classes["carousel-item__body"]}>
        <Carousel {...rest}>
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselBlockItem;
