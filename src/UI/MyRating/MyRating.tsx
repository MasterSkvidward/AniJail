import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import classes from "./MyRating.module.scss";

interface MyRatingProps {
  userRating: number;
  setRatingVisible?: Dispatch<SetStateAction<boolean>>;
  setUserRating: Dispatch<SetStateAction<number>>;
  maxWidth?: number;
  width?: string;
  items?: 10 | 2 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
  showUserRating?: boolean
}

const MyRating: FC<MyRatingProps> = ({
  userRating,
  setUserRating,
  setRatingVisible,
  maxWidth,
  width,
  items = 10,
  showUserRating = false,
}) => {
  const [rating, setRating] = useState<number>(userRating);

//   const buttonStyles = {
//     padding: "9px 10px",
//     backgroundColor: "red",
//     cursor: "pointer",
//     borderRadius: "19px",
//     width: "101.6px",
//     TextAlign: "center",
//     UserSelect: "none",
//     alignSelf: "center",
//     marginTop: "11px",
//     color: "white",
//   };

  const CUSTOM_ITEM_LABELS = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];
  const CUSTOM_ITEM_LABELS_IDS = [
    "label_1",
    "label_2",
    "label_3",
    "label_4",
    "label_5",
    "label_6",
    "label_7",
    "label_8",
    "label_9",
    "label_10",
  ];

  const handlerClick = (e: MouseEvent): void => {
    // e.stopPropagation();
  };

  const handlerButtonClick = (e: MouseEvent): void => {
    setRating(0);
    setUserRating(0);

    // e.stopPropagation();
  };

  const handlerChange = (selectedValue: number) => {
    if (selectedValue) {
      setRating(selectedValue);
      setUserRating(selectedValue);
    }
    setRatingVisible && setRatingVisible(false);
  };

  return (
    <div
      onClick={handlerClick}
      className={classes["rating"]}
    >
      <Rating
        value={rating}
        onChange={handlerChange}
        items={items}
        transition="position"
      />

      <div
        className={classes["rating__body"]}
        style={{gridTemplateColumns: `repeat(${items}, 1fr)`}}
      >
        {CUSTOM_ITEM_LABELS.map((label, index) => (
          <span
            key={label}
            id={CUSTOM_ITEM_LABELS_IDS[index]}
            style={{
              opacity: index === rating - 1 ? 1 : 0.35,
              fontSize: "1.01em",
              color: "var(--text-primary)",
              fontWeight: "500",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {rating ? (
        <div className={showUserRating ? [classes["rating__footer"], classes["show"]].join(" ") : classes["rating__footer"]}>
            <span className={classes["rating__user-score"]}>My score: {userRating}</span>
            <div className={classes["rating__btn"]} onClick={handlerButtonClick}>
                Reset Score
            </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyRating;
