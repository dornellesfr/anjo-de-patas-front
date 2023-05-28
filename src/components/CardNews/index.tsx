import { ReactElement } from "react";
import INewsMock from "../../@types/INewsMockHome";
import StyledCardNews from "./CardNews";

function CardNews({ news }: { news: INewsMock}): ReactElement {
  return (
    <StyledCardNews bg={news.image}>
      <div className="description">
        <h2>{news.title}</h2>
        <p>{news.subtitle}</p>
      </div>
    </StyledCardNews>
  );
}

export default CardNews;
