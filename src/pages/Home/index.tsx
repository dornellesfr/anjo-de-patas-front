import { ReactElement } from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import SocialMediaZone from "../../components/SocialMediaZone";
import Carousel from "../../components/Carousel";
import slides from "../../helpers/carousel/mockMainlyCarousel";
import PetCard from "../../components/PetCard/index";
import Footer from "../../components/Footer";
import SectionNews from "../../components/SectionNews";


function Home(): ReactElement {
  return (
    <>
      <Header />
      <Carousel slides={slides} vw={90} vh={70}/>
      <About />
      <SocialMediaZone />
      <PetCard/>
      <SectionNews />
      <Footer />
    </>
  );
}

export default Home;
