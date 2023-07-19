import React, { FC, useState, useEffect, MouseEvent } from "react";
import classes from "../../styles/AnimeCard.module.scss";
import AnimeCardInfo from "./AnimeCardInfo";
import background_img from "../../images/onepiece_2560x1440.jpg";
import searchLoupe from "../../images/search-loupe.png";
import MyModal from "../../UI/MyModal/MyModal";
import DropMenu from "../../UI/DropMenu/DropMenu";
import ImageResponsive from "../../UI/ImageResponsive/ImageResponsive";
import Score from "../../UI/Score/Score";
import { IAnime } from '../../types/jikanMoe/jikan';
import { get_average_rgb, formatColor } from "../../utils/utils";
import { AnimeService } from "../../API/AnimeService";
import MyButton from "../../UI/MyButton/MyButton";
import { watchCategories } from "../../utils/data";
import MyRating from "../../UI/MyRating/MyRating";

interface AnimeCardProps {
  anime: IAnime | null;
  // animePictures: IAnimePicture[] | []
}

const AnimeCard: FC<AnimeCardProps> = ({ anime }) => {
  const [animeColor, setAnimeColor] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [ratingVisible, setRatingVisible] = useState(false);
  const [userRating, setUserRating] = useState<number>(7);

  const backgroundImgStyle = {
    // background: `linear-gradient(to bottom, transparent 0%, rgba(${animeColor}, 0.9) 92%), url(${background_img}) 0 30% / cover`,
    backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(${animeColor}, 1) 97%), url(${background_img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center 30%",
  };

  const getAnimeColor = async () => {
    const color = await get_average_rgb(background_img);
    setAnimeColor(formatColor(color.toString()));
  };

  const handlerDocumentClick = (e: Event): void => {
    setRatingVisible(false);
  };

  const handlerRateClick = (e: MouseEvent): void => {
    setRatingVisible(!ratingVisible);
    e.stopPropagation();
  };

  useEffect(() => {
    getAnimeColor();
    document.addEventListener("click", handlerDocumentClick);
    return () => document.removeEventListener("click", handlerDocumentClick);
  }, []);

  if (!anime) return <></>;
  return (
    <section className={classes["anime-card"]}>
      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        <ImageResponsive url={anime.images.jpg["large_image_url"]} />
      </MyModal>
      <div className={classes["anime-card__header"]}>
        <div
          className={classes["anime-card__background"]}
          style={backgroundImgStyle}
        >
          {/* <img src={background_img} alt="OnePiece" /> */}
        </div>
      </div>
      <div
        className={[classes["anime-card__container"], "_container1800"].join(
          " "
        )}
      >
        <div className={classes["anime-card__main"]}>
          <div className={classes["anime-card__media"]}>
            <div
              className={classes["anime-card__image"]}
              onClick={() => setModalVisible(true)}
            >
              <img src={anime?.images.jpg.image_url}></img>
              <img className={classes["search-loupe"]} src={searchLoupe}></img>
            </div>
            <div className={classes["anime-card__dropmenu"]}>
              <DropMenu
                defaultValue={{ name: "Add to List", accessor: "add" }}
                options={watchCategories}
              />
            </div>
          </div>

          <div className={classes["anime-card__body"]}>
            <AnimeCardInfo anime={anime} />
          </div>
          <div className={classes["anime-card__score"]}>
            <Score score={anime?.score} fontSize={30} />
            <div className={classes["scoredBy"]}>{anime?.scored_by}</div>
            <div className={classes["rate"]} onClick={handlerRateClick}>
              <div className={classes["rate__btn"]}>
                <span>Rate</span>
                <span>{userRating}</span>{" "}
              </div>
              {/* <MyButton value='Rate'/> */}
              <div
                className={
                  ratingVisible
                    ? [classes["rate__block"], classes["active"]].join(" ")
                    : classes["rate__block"]
                }
              >
                <div className={classes["rate__body"]}>
                  <MyRating
                    setUserRating={setUserRating}
                    setRatingVisible={setRatingVisible}
                    maxWidth={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AnimeCard;
