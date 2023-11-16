import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProfileReviews from "../../components/Profile/ProfileReviews/ProfileReviews";
import { AnimeActionCreators } from "../../store/reducers/anime/action-creatores";
import classes from "./ReviewIdPage.module.scss";

import background_img2 from "../../assets/images/anime-voice.jpg";
import ReviewFull from "../../components/Review/ReviewFull/ReviewFull";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ReviewIdPage = () => {
    const { animeSingle, animeReviews, animeReviewsLoading, animeReviewsError } = useTypedSelector((state) => state.anime);
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
         <div className={[classes["reviews__container"], "_container-main"].join(" ")}>
            <ReviewFull review={animeReviews[0]}/>
         </div>
      
      </div>
   );
};

export default ReviewIdPage;
