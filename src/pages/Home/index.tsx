import { ReactElement } from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import SocialMediaZone from "../../components/SocialMediaZone";
import Carousel from "../../components/Carousel";
import slides from "../../helpers/carousel/mockMainlyCarousel";

function Home(): ReactElement {
  return (
    <>
      <Header />
      <Carousel slides={slides}/>
      <About />
      <SocialMediaZone />
    </>
  );
}

export default Home;