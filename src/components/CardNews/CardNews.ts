import styled from 'styled-components';

const borderRadius = '8px';

interface bg {
  bg: string;
}

const StyledCardNews = styled.div<bg>`
  font-family: 'Lilita One';
  background-image: url(${({ bg }) => bg});
  border-radius: ${borderRadius};
  background-size: cover;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  height: 70%;
  margin: 0 3rem;
  position: relative;
  transition: ease-in 0.2s;
  width: 22%;

  &:hover {
    height: 80%;
    width: 25%;
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
    height: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-radius: 0 0 8px 8px;
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
`;

export default StyledCardNews;
