import INewsMock from "./INewsMockHome";

interface ICardNews {
  news: INewsMock;
  dimensions: {
    height: number;
    width: number;
  }
}

export default ICardNews;