import { ReactElement } from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import SocialMediaZone from "../../components/SocialMediaZone";

function Home(): ReactElement {
  return (
    <>
      <Header />
      <About />
      <SocialMediaZone />
    </>
  );
}

export default Home;