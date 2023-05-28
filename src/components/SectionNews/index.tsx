import { ReactElement } from "react";
import StyledSectionNews from "./SectionNews";
import CardNewsHome from "../CardNews";
import newsMockHome from "../../helpers/news/newsMockHome";
import INewsMock from "../../@types/INewsMockHome";

function SectionNews(): ReactElement {
  return (
    <StyledSectionNews>
      { newsMockHome.map((news: INewsMock) => (
        <CardNewsHome news={news}/>
      )) }
    </StyledSectionNews>
  );
}

export default SectionNews;
