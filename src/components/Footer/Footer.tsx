import React from "react";
import classes from "./Footer.module.scss";
// import footer_image from "../../assets/images/footer_girl.png";

import footer_image from "../../assets/images/luffy-footer.png";
import github_logo from "../../assets/icons/github-logo.png";

import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={[classes["footer__container"], "_container1800"].join(" ")}>
            <div className={[classes["footer__info"], classes["info"]].join(" ")}>
                <h3 className={classes["info__brandname"]}>AnimeJail</h3>
                <div className={classes["info__divider"]}></div>
                <h4>Track anime online</h4>
                <h4 className={classes['info__copyright']}>Copyright ©AnimeJail. All Rights Reserved</h4>
            </div>

            <div className={[classes["footer__contacts"], classes["contacts"]].join(" ")}>
                <h3 className={classes["contacts__title"]}>Made by:</h3>
                <ul className={classes["contacts__links"]}>
                    <li><a href="https://github.com/MasterSkvidward"> Arthur  <BsGithub/></a></li>
                    <li><a href="https://github.com/MasterSkvidward"> Vlad  <BsGithub/></a></li>
                </ul>
            </div>
            <div className={classes["footer__image"]}>
                
                <img src={footer_image} alt="Luffy" />
            </div>
      </div>
    </footer>
  );
};

export default Footer;
