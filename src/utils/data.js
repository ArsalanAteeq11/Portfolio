import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { FaHtml5, FaCss3 } from "react-icons/fa";

export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Inciter Tech",
    tenure: "Dec 2023 - Present",
    role: "Frontend Developer",
    detail:
      "Currently I'm working as a frontend developer using Next.js, Ant Design, and GraphQL with Apollo Client, along with state management through Redux Toolkit. I have developed and redesigned several web applications, including Finedeeds and Jonah's Investment Spreadsheet.",
  },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const SkillsData = [
  {
    id: 1,
    name: "HTML5",
    value: 89,
    icon: FaHtml5,
  },
  {
    id: 2,
    name: "CSS3",
    value: 79,
    icon: FaCss3,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    value: 88,
  },
  {
    id: 4,
    name: "JavaScript",
    value: 72,
  },
  {
    id: 5,
    name: "REACT JS",
    value: 77,
  },
  {
    id: 6,
    name: "Rest Api",
    value: 62,
  },
  {
    id: 7,
    name: "Graphql",
    value: 58,
  },
];

export const worksData = [
  {
    id: 33,
    img: "./quick-ai.png",
    name: "Quick.ai",
    delay: 0.5,
    duration: 0.6,
    link: "https://quick-ai-three-sigma.vercel.app/",
    description:
      "An AI-powered web application that generates text responses using React.js, Node.js, and PostgreSQL. Integrated the OpenAI API for AI functionality and implemented user authentication. Designed a responsive UI with Tailwind CSS. This project demonstrates my ability to combine AI with scalable web solutions.",
  },
  {
    id: 1,
    img: "./greenCart.png",
    name: "GreenCart",
    delay: 0.5,
    duration: 0.6,
    link: "https://green-cart-grocery-store.vercel.app/",

    description:
      "A full-stack grocery e-commerce platform with product listings, cart management, and a secure checkout flow. Designed a modern responsive UI using React.js and Tailwind CSS. Developed backend APIs with Node.js and Express, and managed product/user data with MongoDB. Optimized for performance and scalability to handle real-world e-commerce scenarios.",
  },
  {
    id: 2,
    img: "./movix.png",
    name: "Movix",
    delay: 0.6,
    duration: 0.7,
    link: "https://movix-rose-seven.vercel.app/",
    description:
      "Movix is a web application designed to explore and watch movie trailers, powered by data from the TMDB API. Built for movie enthusiasts, it provides a seamless browsing experience with detailed information about movies and their trailers. Movix combines functionality and entertainment, making it an ideal platform to discover your next favorite film.",
  },
];
