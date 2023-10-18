import React, { MouseEvent, useState, useRef } from "react";
import { BsPlusLg } from "react-icons/bs";
import { toggleStringElement } from "../../utils/utils";
import { faqItems } from "./constants";

import classes from "./FAQ.module.scss";

const FAQ = () => {
   //    const [clickedQuestions, setClickedQuestions] = useState<string[]>([""]);

   let temp: HTMLDivElement;

   const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
      //   const newClickedQuestions:string[] = toggleStringElement(clickedQuestions, event.currentTarget.dataset.index);
      //   setClickedQuestions(newClickedQuestions);
      if (temp && temp !== event.currentTarget) {
         temp.dataset.open = "false";
         event.currentTarget.dataset.open = "true";
      } else if (temp && temp === event.currentTarget) {
         event.currentTarget.dataset.open = event.currentTarget.dataset.open === "true" ? "false" : "true";
      } else {
         event.currentTarget.dataset.open = "true";
      }
      temp = event.currentTarget;
   };

   return (
      <div className={classes["faq"]}>
         <div className={[classes["faq__container"], "_container1800"].join(" ")}>
            <h2 className={classes["faq__title"]}>Frequently Asked Questions</h2>
            <div className={classes["faq__items"]}>
               {faqItems.map((item, index) => (
                  <div key={index} className={classes["item"]} onClick={handleClick} data-index={index} data-open={"false"}>
                     <div className={classes["item__question"]}>
                        <p>{item.question}</p>
                        <BsPlusLg />
                     </div>
                     <div className={classes["item__answer"]}>
                        <div className={classes["item__paragraphs"]}>
                           {item.answer.map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default FAQ;
