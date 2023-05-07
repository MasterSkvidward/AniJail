import React, {FC, useEffect, useState} from 'react';
import { IAnime } from '../../types/jikanMoe/jikan';
import classes from '../../styles/AnimeItemBig.module.scss';
import { getScoreColor, getShortenedString, get_average_rgb, formatColor } from '../../utils/utils';
import {BsArrowRightCircleFill} from 'react-icons/bs';

interface AnimeItemBigProps {
    anime: IAnime,
}

const AnimeItemBig:FC<AnimeItemBigProps> = ({anime}) => {
    const [animeColor, setAnimeColor] = useState<string>('0,0,0');

    const getAnimeColor = async () => {
        const color = await get_average_rgb(anime.images.jpg.large_image_url);
        setAnimeColor(formatColor(color.toString()));
    }

    useEffect(() => {
        getAnimeColor()
    }, [])

    
    

    return (
       <div className={classes['anime']}>
           <div className={classes['anime__body']} style={{background:  `linear-gradient(to top, transparent 89%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(to bottom, transparent 35%, rgba(${animeColor}, 0.7) 100%), url(${anime.images.jpg.large_image_url}) 0 0/ cover no-repeat`}}>
                <div className={classes['anime__block']}>
                    <h4 className={classes['anime__title']}>{getShortenedString(anime.title_english? anime.title_english : anime.title, 44)}</h4>
                    <div className={classes['anime__synopsis']}>{getShortenedString(anime.synopsis, 115)}</div>
                    <div className={classes['anime__details']}>
                        <span>{`${anime.type}, ${anime.year}`}</span>
                    </div>
                    <div className={classes['anime__arrow']}>
                        <BsArrowRightCircleFill/>
                    </div>
                </div>
           </div>
       </div>
    );
}

export default AnimeItemBig;