import type { NextPage } from "next";
import HomeComponent from "../components/Home";
import AboutComponent from "../components/About";
import PortfolioComponent from "../components/Portfolio";
import Style from "../styles/Home.module.css";
const HomePage: NextPage = () => {
  return (
    <>
      <section className={Style.section} id="Home">
        {" "}
        <HomeComponent />
      </section>
      <section className={Style.section} id="About Me">
        <AboutComponent />
      </section>
      <section className={Style.section} id="Portfolio">
        <PortfolioComponent />
      </section>
    </>
  );
};

export default HomePage;
