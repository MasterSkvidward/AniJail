import { FC, SyntheticEvent, useRef } from "react";
import { getAnimeScore } from "../../utils/utils";
import classes from "./Image.module.scss";

import errorImage from "../../assets/images/satoru.jpg";

interface ImageProps {
   url: string;
   alt?: string;
   score?: number;
}

const Image: FC<ImageProps> = ({ url, alt, score }) => {
   const imgRef = useRef<HTMLImageElement>(null);

   //    const getUrl = (urlLink: string): string => {
   //       let newStr = urlLink.slice(0, -4) + "l" + urlLink.slice(-4);
   //       return newStr;
   //    };

   const handleImageError = (e: SyntheticEvent) => {
      if (imgRef.current) imgRef.current.src = errorImage;
      e.stopPropagation();
   };

   return (
      <div className={classes.image}>
         {/* <div className={classes.image} style={{background: `url(${url}) 0 0 / cover no-repeat`}}> */}
         <img ref={imgRef} src={url || ""} alt={alt} onError={handleImageError} />
         {score && (
            <div className={classes.rating}>
               <div className={classes.ratingNumber}>{getAnimeScore(score)}</div>
            </div>
         )}
      </div>
   );
};

export default Image;
