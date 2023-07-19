import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./MyRating.module.scss";

interface MyRatingProps {
  setRatingVisible: Dispatch<SetStateAction<boolean>>;
  setUserRating: Dispatch<SetStateAction<number>>;
  maxWidth?: number;
  width?: string;
  items?: 10 | 2 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
}

const MyRating: FC<MyRatingProps> = ({
  setUserRating,
  setRatingVisible,
  maxWidth,
  width,
  items = 10,
}) => {
  const [rating, setRating] = useState(0);

  const buttonStyles = {
    padding: "9px 10px",
    backgroundColor: "red",
    cursor: "pointer",
    borderRadius: "19px",
    width: "101.6px",
    TextAlign: "center",
    UserSelect: "none",
    alignSelf: "center",
  };

  const CUSTOM_ITEM_LABELS = ["Bad", "Poor", "Average", "Good", "Excellent"];
  const CUSTOM_ITEM_LABELS_IDS = [
    "label_1",
    "label_2",
    "label_3",
    "label_4",
    "label_5",
  ];

  const handlerClick = (e: MouseEvent): void => {
    console.log("Click Yes");

    // e.stopPropagation();
  };

  const handlerButtonClick = (e: MouseEvent): void => {
    setRating(0);
    setUserRating(0);

    // e.stopPropagation();
  };

  const handlerChange = (selectedValue: number) => {
    setRating(selectedValue);
    setUserRating(selectedValue);
    setRatingVisible(false);
  };

  return (
    <div
      style={{
        maxWidth: maxWidth,
        width: "200%",
        display: "flex",
        flexDirection: "column",
        rowGap: 15,
      }}
      onClick={handlerClick}
    >
      <Rating
        value={rating}
        onChange={handlerChange}
        items={items}
        className={"rating"}
        // halfFillMode="box"
        transition="position"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          justifyItems: "center",
        }}
      >
        {CUSTOM_ITEM_LABELS.map((label, index) => (
          <span
            key={label}
            id={CUSTOM_ITEM_LABELS_IDS[index]}
            style={{
              opacity:
                index * 2 + 1 === rating || index * 2 + 2 === rating ? 1 : 0.35,
              // textDecoration: index + 1 === rating ? 'underline' : 'inherit',
              padding: "0 5%",
              fontSize: "13px",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {rating ? (
        <div style={buttonStyles} onClick={handlerButtonClick}>
          Reset Score
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyRating;
