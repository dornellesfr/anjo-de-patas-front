import { ReactElement } from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import SocialMediaZone from "../../components/SocialMediaZone";
import PetCard from "../../components/PetCard/index";


function Home(): ReactElement {
  return (
    <>
      <Header />
      <About />
      <SocialMediaZone />
      <PetCard/>
    </>
  );
}

export default Home;
