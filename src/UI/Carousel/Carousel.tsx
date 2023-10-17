import React, { FC, PropsWithChildren, useState } from "react";
// import '@splidejs/react-splide/css';
import "@splidejs/react-splide/css/core";

import '@splidejs/react-splide/css/skyblue';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import AnimeItem from "../../components/Anime/AnimeItem/AnimeItem";
import classes from "./Carousel.module.scss";
import { IAnime } from "../../types/jikanMoe/jikan";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

interface CarouselProps extends PropsWithChildren {
  options?: any;
  arrowTop?: number;
  arrowSize?: "big" | "medium" | "small";
}

const Carousel: FC<CarouselProps> = ({ options, arrowTop = 50, arrowSize = "medium", children }) => {
  return (
    <Splide hasTrack={false} aria-label="MySlider" options={options}>
      <div className={[classes["carousel"], classes[arrowSize]].join(" ")}>
        <SplideTrack>
          {React.Children.map(children, (child) => (
            <SplideSlide>{child}</SplideSlide>
          ))}
        </SplideTrack>
        <div className={["splide__pagination", classes["carousel__pagination"]].join(" ")} />
      </div>
    </Splide>
  );
};

export default Carousel;
