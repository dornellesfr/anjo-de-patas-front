import { ReactElement } from "react";
import StyledSectionNews from "./SectionNews";
import CardNews from "../CardNews";
import newsMockHome from "../../helpers/news/newsMockHome";
import INewsMock from "../../@types/INewsMockHome";
// import { useHistory } from "react-router-dom";

function SectionNews(): ReactElement {
  return (
    <StyledSectionNews>
      { newsMockHome.map((news: INewsMock) => (
          <CardNews key={news.id} news={news}/>
      )) }
    </StyledSectionNews>
  );
}

export default SectionNews;
