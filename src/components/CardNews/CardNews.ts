import styled from 'styled-components';

const borderRadius = '8px';

interface bg {
  bg: string;
}

const StyledCardNews = styled.div<bg>`
  width: 25%;
  height: 65%;
  margin: 0 3rem;
  position: relative;
  border-radius: ${borderRadius};
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: ease-in 0.2s;

  &:hover {
    height: 80%;
    width: 30%;
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
    color: black;
    font-size: 1rem;
    font-weight: bold;
  }

  & .description h2 {
    font-size: 1.8rem;
    color: white;
    text-shadow: 0px 0px 5px black;
  }
`;

export default StyledCardNews;
