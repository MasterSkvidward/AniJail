import React, {FC} from "react";

import Title from "../../../UI/Title/Title";
import ContentLoader from "react-content-loader";
import AnimeItemSmall from "../AnimeItemSmall/AnimeItemSmall";
import classes from "./AnimeSidebar.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IAnime } from "../../../types/jikanMoe/jikan";

interface AnimeSidebarProps {
    anime: IAnime [];
}

const AnimeSidebar:FC<AnimeSidebarProps> = ({anime}) => {

   return (
      <aside className={classes["anime"]}>
         <Title value="Airing Now" />
         <div>
            {anime.length !== 0
               ? anime.slice(0, 8).map((item, index) => <AnimeItemSmall anime={item} key={index} />)
               : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <ContentLoader
                       key={index}
                       speed={2}
                       className={classes["skeleton__item-small"]}
                       foregroundColor="var(--background-secondary)"
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
