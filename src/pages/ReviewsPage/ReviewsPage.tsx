import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProfileReviews from "../../components/Profile/ProfileReviews/ProfileReviews";
import { AnimeActionCreators } from "../../store/reducers/anime/action-creatores";
import classes from "./ReviewsPage.module.scss";

import background_img2 from "../../assets/images/anime-voice.jpg";

const ReviewsPage = () => {
   const dispatch = useDispatch();
   const fetchAnimeReviews = async () => {
      await dispatch(AnimeActionCreators.GetAnimeReviews(20));
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      fetchAnimeReviews();
   }, []);

   const backgroundImgStyle = {
      background: `linear-gradient(to bottom, transparent 0%, rgba(20, 20, 20, 0.7) 100%), url(${background_img2}) center 60% / cover`,
      //   backgroundImage: `url(${background_img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center 60%",
   };

   return (
      <div className={classes["reviews"]}>
         <div className={classes["banner"]} style={backgroundImgStyle}></div>

         <h1 className={classes["reviews__title"]}>Demon Slayer: Kimetsu no Yaiba</h1>
         <ProfileReviews />
      </div>
   );
};

export default ReviewsPage;
