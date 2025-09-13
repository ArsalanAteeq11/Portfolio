import React from "react";
import css from "./Hero.module.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import resume from "../../HafizMuhammadArsalan.pdf";
import ContentWrapper from "../wrapper/Wrapper";

const Hero = () => {
  return (
    <section className={`  paddings ${css.wrapper}`}>
      <a className="anchor" id="home"></a>
      <ContentWrapper>
        <motion.div
          className={`innerWidth ${css.container}`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className={css.upperElement}
          >
            <span style={{ textAlign: "start" }} className="primaryText">
              Hey There,
              <span className={css.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
              <br />
              I'm <br /> <span className="purple">Muhammad Arsalan.</span>
            </span>
            <span className="secondaryText">
              I develop beautiful and simple
              <br />
              user friendly websites.
            </span>

            <a
              href={resume}
              download="Muhammad Arsalan"
              className={css.herolink}
            >
              <button className="btn">
                Download CV
                <AiOutlineArrowDown size={20} />
              </button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}
          >
            <motion.img
              variants={slideIn("up", "tween", 0.5, 1.3)}
              src="./arsalanProfile.png"
              alt=""
            />
          </motion.div>
        </motion.div>
      </ContentWrapper>
    </section>
  );
};

export default Hero;
