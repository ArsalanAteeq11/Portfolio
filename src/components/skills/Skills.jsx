import React from "react";
import { workExp } from "../../utils/data";
import css from "./skills.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import * as Icon from "react-icons";
import ContentWrapper from "../wrapper/Wrapper";
import { FaHtml5, FaCss3, FaSlack } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact, DiMongodb, DiNodejs, DiGit } from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiApollographql,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiGithub,
  SiDiscord,
  SiWindows,
  SiNestjs,
} from "react-icons/si";
const Skills = () => {
  return (
    <div className={` paddings ${css.wrapper}`}>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        // className={`paddings ${css.wrapper}`}
      >
        <a className="anchor" id="skillset"></a>

        <ContentWrapper>
          <div className={`innerWidth flexCenter ${css.container}`}>
            {/* heading */}
            <span className="primaryText">
              Professional <span className="purple">Skillset</span>
            </span>

            <div className={css.skillsContainer}>
              <div className={css.skill}>
                <FaHtml5 />
              </div>
              <div className={css.skill}>
                <FaCss3 />
              </div>
              <div className={css.skill}>
                <IoLogoJavascript />
              </div>
              <div className={css.skill}>
                <DiReact />
              </div>

              <div className={css.skill}>
                <DiMongodb />
              </div>
              <div className={css.skill}>
                <SiNextdotjs />
              </div>
              <div className={css.skill}>
                <SiExpress />
              </div>
              <div className={css.skill}>
                <SiNodedotjs />
              </div>
              <div className={css.skill}>
                <SiFirebase />
              </div>
            </div>
            <span className="primaryText">
              Tools I <span className="purple">Use</span>
            </span>
            <div className={css.skillsContainer}>
              <div className={css.skill}>
                <SiVisualstudiocode />
              </div>
              <div className={css.skill}>
                <SiSlack />
              </div>
              <div className={css.skill}>
                <SiDiscord />
              </div>
              <div className={css.skill}>
                <SiPostman />
              </div>
              <div className={css.skill}>
                <SiWindows />
              </div>
            </div>
          </div>
        </ContentWrapper>
      </motion.section>
    </div>
  );
};

export default Skills;
