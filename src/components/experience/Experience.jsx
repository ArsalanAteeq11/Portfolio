import React from "react";
import { workExp } from "../../utils/data";
import css from "./experience.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import ContentWrapper from "../wrapper/Wrapper";
const Experience = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        // className={`paddings ${css.wrapper}`}
      >
        <a className="anchor" id="work"></a>
        <ContentWrapper>
          <div className={`innerWidth flexCenter ${css.container}`}>
            {/* heading */}
            <span className="primaryText ">
              My Work <span className="purple">Experience</span>{" "}
            </span>

            <div className={`flexCenter ${css.experiences}`}>
              {workExp.map((exp, i) => {
                return (
                  <motion.div
                    variants={textVariant2}
                    key={i}
                    className={`flexCenter ${css.exp}`}
                  >
                    <div className={css.post}>
                      <h1>{exp.place}</h1>
                      <p>{exp.tenure}</p>
                    </div>
                    <div className={css.role}>
                      <h1>{exp.role}</h1>
                      <p>{exp.detail}</p>
                    </div>
                  </motion.div>
                );
              })}

              <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
                <motion.div
                  variants={fadeIn("down", "tween", 2, 1.5)}
                  className={css.line}
                ></motion.div>
                <div>
                  <div
                    className={css.circle}
                    style={{ background: "#286F6C" }}
                  ></div>
                </div>
                <div>
                  <div
                    className={css.circle}
                    style={{ background: "#F2704E" }}
                  ></div>
                </div>
              </motion.div>
            </div>
          </div>
        </ContentWrapper>
      </motion.section>
    </div>
  );
};

export default Experience;
