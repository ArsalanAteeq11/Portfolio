import { Toaster } from "react-hot-toast";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Works from "./components/works/Works";
import css from "./styles/app.module.scss";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
const App = () => {
  return (
    <>
      <Toaster />
      <div className={` ${css.container}`}>
        <Header />
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Works />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
