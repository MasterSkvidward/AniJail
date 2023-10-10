import { FC } from "react";
import { getAnimeScore } from "../../utils/utils";
import classes from "./Image.module.scss";

interface ImageProps {
  url: string;
  alt?: string;
  score?: number;
}

const Image: FC<ImageProps> = ({ url, alt, score }) => {

    const getUrl = (urlLink:string):string => {
        let newStr = urlLink.slice(0, -4) + "l" + urlLink.slice(-4);
        return newStr;
    }
    
    
  return (
    <div className={classes.image}>
      {/* <div className={classes.image} style={{background: `url(${url}) 0 0 / cover no-repeat`}}> */}
      <img src={url} alt={alt} />
      {score && (
        <div className={classes.rating}>
          <div className={classes.ratingNumber}>{getAnimeScore(score)}</div>
        </div>
      )}
    </div>
  );
};

export default Image;
