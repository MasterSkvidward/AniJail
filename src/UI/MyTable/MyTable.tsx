import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Anime from "../../pages/AnimePage/AnimePage";
import { IAnime } from "../../types/jikanMoe/jikan";
import { getAnimeScore, getScoreColor } from "../../utils/utils";
import Score from "../Score/Score";

import classes from "./MyTable.module.scss";

interface MyTableProps {
  headlines: string[];
  data: IAnime[];
}

const MyTable: FC<MyTableProps> = ({ headlines, data }) => {
  const navigate = useNavigate();

  return (
    <>
      <table className={classes["table"]}>
        <thead>
          <tr>
            {headlines.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={() => navigate(`/anime/${item?.mal_id}`)}>
              <td>{index + 1}</td>
              <td>
                <div className={classes["anime"]}>
                  <div
                    style={{
                      background: `url(${item.images.jpg.image_url}) 0 0 / cover no-repeat`,
                    }}
                    className={classes["anime__image"]}
                  >
                    {/* <img src={item.images.jpg.small_image_url} alt={item.title_english} /> */}
                  </div>

                  <div className={classes["anime__body"]}>
                    <div className={classes["anime__titles"]}>
                      <span
                        className={[
                          classes["anime__title"],
                          classes["anime__title_en"],
                        ].join(" ")}
                      >
                        {item.title ? item.title : item.title_english}
                      </span>

                      <span
                        className={[
                          classes["anime__title"],
                          classes["anime__title_jp"],
                        ].join(" ")}
                      >
                        {item.title_japanese}
                      </span>
                    </div>
                    <div className={classes["anime__year"]}>
                      {item.year ? item.year : "-"}
                    </div>
                    <div className={classes["anime__score"]}>
                      <Score score={item.score} />
                    </div>
                  </div>
                </div>

                {/* {item.} */}
              </td>

              <td>
                <div className={classes["user__score"]}>{"-"}</div>
              </td>

              <td>
                <div className={classes["anime__type"]}>
                  {item.type ? item.type : "-"}
                </div>
              </td>
              {/* <td><img src={image} alt="" width={52} height={52}/></td> */}
              {/* {Object.values(item).map((elem, index) =>
                            <td key={index}>{elem}</td>
                        )} */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MyTable;
