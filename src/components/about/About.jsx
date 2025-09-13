import { Progress } from "@mantine/core";
import React from "react";
import { SkillsData } from "../../utils/data";
import css from "./About.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  headerVariants,
  slideIn,
  staggerChildren,
} from "../../utils/motion";
import ContentWrapper from "../wrapper/Wrapper";
import { ImPointRight } from "react-icons/im";
const About = () => {
  return (
    <motion.section
      className={ ` paddings ${css.wrapper}`}
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <ContentWrapper>
        <a className="anchor" id="about"></a>
        <motion.h1
          variants={slideIn("up", "tween", 0.1, 0.1)}
          className="primaryText"
        >
          Know Who <span className="purple"> I'M</span>
        </motion.h1>
        <div className={`${css.aboutMe}`}>
          {/* description */}
          <div className={css.image_container}>
            <img src="./arsalan_about.png" alt="" />
          </div>
          <motion.div
            variants={slideIn("up", "tween", 0.2, 1.1)}
            className={css.description}
          >
            <span className="secondaryText">
              I am{" "}
              <span className="purple">
                <strong>Software Developer</strong>{" "}
              </span>
              with expertise in MongoDB, Express.js, React.js, Node.js, and
              Next.js. Currently focused on building dynamic
              <span className="purple">
                <strong> Web Applications</strong>{" "}
              </span>{" "}
              using Next.js and GraphQL with Apollo Client. Proven ability in
              full-stack development, specializing in creating efficient,
              scalable solutions with a passion for innovative{" "}
              <span className="purple">
                <strong> Problem-solving.</strong>{" "}
              </span>{" "}
            </span>
            <br />
            <span className="secondaryText">
              Apart from coding, some other activities that I love to do!
            </span>
            <ul style={{ marginLeft: "30px" }}>
              <li className={css.about_activity}>
                <ImPointRight /> Playing Games
              </li>
              <li className={css.about_activity}>
                <ImPointRight /> Gyming
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/in/hafiz-muhammad-arsalan-3b994a307/"
              className={css.icon}
              target="_blank"
            >
              <button className="btn"> Connect now</button>
            </a>
          </motion.div>
          {/* Skills */}

          {/* <motion.div
            variants={fadeIn("left", "tween", 0.2, 2)}
            className={css.skills}
          >
            {SkillsData.map((item) => (
              <div key={item.id} className={css.skillsBar}>
                <span>{item.name}</span>
                <Progress
                  size="xl"
                  sections={[
                    {
                      value: item?.value,
                      color: "rgba(35,15,115,0.6615021008403361)",
                    },
                    {
                      value: Math.floor(`${100 % -item?.value}`),
                      color: "#ddd",
                    },
                  ]}
                />
              </div>
            ))}
          </motion.div> */}
        </div>
      </ContentWrapper>
    </motion.section>
  );
};

export default About;
