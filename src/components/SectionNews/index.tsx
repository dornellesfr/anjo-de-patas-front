import Carousel from "../Carousel";
import slides from "../../helpers/carousel/mockMainlyCarousel";
import StyledSectionNews from "./SectionNews";


function SectionNews() {
  return (
    <StyledSectionNews>
      <Carousel slides={slides} vw={50} vh={50} />
      
    </StyledSectionNews>
  );
}

export default SectionNews;
