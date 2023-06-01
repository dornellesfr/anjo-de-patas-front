import { ReactElement } from "react";
import StyledCardNews from "./CardNews";
import ICardNews from "../../@types/ICardNews";

function CardNews(props: ICardNews): ReactElement {
  return (
    <StyledCardNews bg={props.news.image} dimensions={props.dimensions}>
      <div className="description">
        <h2>{props.news.title}</h2>
        <p>{props.news.subtitle}</p>
      </div>
    </StyledCardNews>
  );
}

export default CardNews;
