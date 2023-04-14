import React, {FC, useState} from 'react';
import classes from '../../styles/AnimeCard.module.scss';
import { IAnimeFull, IAnimePicture } from '../../types/jikan';
import AnimeCardInfo from './AnimeCardInfo';
import background_img from '../../images/onepiece_2560x1440.jpg';
import searchLoupe from '../../images/search-loupe.png';
import MyModal from '../../UI/MyModal/MyModal';
import DropMenu from '../../UI/DropMenu/DropMenu';
import ImageResponsive from '../../UI/ImageResponsive/ImageResponsive';


interface AnimeCardProps {
    anime: IAnimeFull | null
    // animePictures: IAnimePicture[] | []
}

const AnimeCard: FC<AnimeCardProps> = ({anime}) => {
    const [modalVisible, setModalVisible] = useState(false);
    if (!anime) return <></>;

    const dropMenuOptions = [
        {name: 'Add to list', value: ''},
        {name: 'Add to list', value: ''},
    ]

    return (
       <div className={classes['anime-card']}>
            <MyModal visible={modalVisible} setVisible={setModalVisible}><ImageResponsive url={anime.images.jpg['large_image_url']}/></MyModal>
            <div className={classes['anime-card__header']}>
                <div className={classes['anime-card__background']}>
                    <img src={background_img} alt="OnePiece" />
                </div>
            </div>
            <div className={[classes['anime-card__container'], '_container'].join(' ')}>
                <div className={classes['anime-card__main']}>
                    <div className={classes['anime-card__media']}>
                        <div className={classes['anime-card__image']} onClick={() => setModalVisible(true)}>
                            <img src={anime?.images.jpg.image_url}></img>
                            <img className={classes['search-loupe']} src={searchLoupe}></img>
                        </div>
                        <div className={classes['anime-card__dropmenu']}>
                            <DropMenu options={dropMenuOptions}/>
                        </div>
                    </div>

                    <div className={classes['anime-card__body']}>
                        <AnimeCardInfo anime={anime}/>
                    </div>

                    <div className={classes['anime-card__score']}>
                        <div className={classes['score']}>
                            {anime?.score}
                        </div>
                        <div className={classes['scoredBy']}>
                            {anime?.scored_by}
                        </div>
                        <div className={classes['rate']}>Rate</div>
                    </div>
                </div>
               
           </div>
       </div>
    );
}

export default AnimeCard;