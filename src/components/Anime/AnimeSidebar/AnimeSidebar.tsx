import React, { FC, MouseEvent } from "react";

import Title from "../../../UI/Title/Title";
import ContentLoader from "react-content-loader";
import AnimeItemSmall from "../AnimeItemSmall/AnimeItemSmall";
import classes from "./AnimeSidebar.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IAnime } from "../../../types/jikanMoe/jikan";

interface AnimeSidebarProps {
   anime: IAnime[];
}

const AnimeSidebar: FC<AnimeSidebarProps> = ({ anime }) => {
   return (
      <aside className={classes["anime"]}>
         <Title value="Trending Now" isLink={true} />
         <div className={classes["anime__body"]}>
            {anime.length !== 0
               ? anime.slice(0, 5).map((item, index) => <AnimeItemSmall anime={item} key={index} />)
               : [0, 1, 2, 3, 4, 5].map((item, index) => (
                    <ContentLoader
                       key={index}
                       speed={2}
                       className={classes["skeleton__item-small"]}
                       foregroundColor="var(--background-300)"
                       backgroundColor="var(--background-skeleton)"
                    >
                       <rect x="0" y="0" rx="2" ry="2" width="424" height="139" />
                    </ContentLoader>
                 ))}
         </div>
      </aside>
   );
};

export default AnimeSidebar;
