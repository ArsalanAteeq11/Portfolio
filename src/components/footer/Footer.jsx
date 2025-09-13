import React from "react";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import css from "./footer.module.scss";
import ContentWrapper from "../wrapper/Wrapper";

const Footer = () => {
  return (
    <footer className={`bg-primary paddings ${css.wrapper}`}>
      <ContentWrapper>
        <div className={`flexCenter ${css.container}`}>
          <div className={css.icons}>
            <a href="#" className={css.icon}>
              <FaFacebookF />
            </a>

            <a
              href="  https://www.linkedin.com/in/hafiz-muhammad-arsalan-3b994a307/"
              className={css.icon}
              target="_blank"
            >
              <GrLinkedinOption />
            </a>
            <a
              href="https://github.com/ArsalanAteeq11"
              className={css.icon}
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
          <div className={css.name}>
            <span>Muhammad Arsalan</span>
            <AiOutlineCopyrightCircle />
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
