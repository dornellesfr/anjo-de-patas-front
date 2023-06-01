import styled from 'styled-components';

const borderRadius = '4px';

interface bg {
  bg: string;
  dimensions: {
    height: number;
    width: number;
  }
}

const StyledCardNews = styled.div<bg>`
  font-family: 'Lilita One';
  background-image: url(${({ bg }) => bg});
  border-radius: ${borderRadius};
  background-size: cover;
  box-sizing: border-box;
  background-position: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin: 1.5rem;
  position: relative;
  transition: ease-in 0.2s;
  height: ${(props) => props.dimensions.height}px;
  width: ${(props) => props.dimensions.width}px;

  &:hover {
    height: ${(props) => props.dimensions.height * 1.30 }px;
    width: ${(props) => props.dimensions.width * 1.30 }px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    display: block;
    max-width: 300px;
    border-radius: ${borderRadius};
    position: absolute;
  }

  & .description {
    background-color: #ff9501;
    bottom: 0px;
    width: 100%;
    position: absolute;
    height: 35%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-radius: 0 0 4px 4px;
    text-align: center;
  }

  & .description p {
    color: white;
    font-size: 1rem;
    text-shadow: 1px 1px 1px black;
  }

  & .description h2 {
    font-size: 1.8rem;
    color: white;
    text-shadow: 1px 1px 7px black;
  }
  
  @media (max-width: 950px) {
    &:hover {
      height: ${(props) => props.dimensions.height}px;
      width: ${(props) => props.dimensions.width}px;
      display: initial;
      justify-content: initial;
      align-items: initial;
    }
  }
`;

export default StyledCardNews;
