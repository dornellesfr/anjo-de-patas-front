import { ReactElement } from "react";
import INewsMock from "../../@types/INewsMockHome";
import StyledCardNews from "./CardNews";

function CardNews({ news }: { news: INewsMock}): ReactElement {
  return (
    <StyledCardNews bg={news.image}>
      <div className="background"/>
    </StyledCardNews>
  );
}

export default CardNews;
