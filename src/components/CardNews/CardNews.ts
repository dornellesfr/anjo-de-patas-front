import styled from 'styled-components';

interface ICardNews {
  bg: string;
}

const StyledCardNews = styled.div<ICardNews>`
  height: 100%;
  width: 100%;
  background-color: yellow;

  & .background {
    height: 100%;
    width: 100%;
    border: 1px solid red;
  }
`;

export default StyledCardNews;
