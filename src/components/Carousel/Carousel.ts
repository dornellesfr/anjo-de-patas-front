import styled from 'styled-components';

const StyledCarousel = styled.div`
  width: 90vw;
  height: 70vh;
  margin: 1.5rem auto auto auto;

  & .left-arrow {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    left: 5%;
    z-index: 1;
    cursor: pointer;
    color: #ff9501;
  }

  & .left-arrow:hover {
    color: #45a049;
    transition: ease-out 0.4s;
    font-size: 60px;
    text-shadow: #000 1px 2px 2px;
  }

  & .right-arrow:hover {
    color: #45a049;
    transition: ease-out 0.3s;
    font-size: 60px;
  }

  & .right-arrow {
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    font-size: 50px;
    right: 5%;
    z-index: 1;
    cursor: pointer;
    color: #ff9501;
  }


  & .container-carousel {
    height: 100%;
    width: 100%;
    position: relative;
  }

  & .carousel-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
  }

  & .overflow-carousel {
    overflow: hidden;
    height: 100%;
  }

  & .description-slide {
    position: absolute;
    top: 80%;
    left: 3%;
    font-size: 1.5rem;
    color: white;
    text-shadow: 1px 1px 1px black;
    margin-right: 3%;
  }

  & .dots-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 93%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .dot:hover {
    font-size: 20px;
    -webkit-text-stroke: 1px #000;
    color: #45a049;
  }

  & .dot {
    margin: 0px 2px;
    cursor: pointer;
    font-size: 10px;
    transition: ease-in 0.1s;
    -webkit-text-stroke: 1px #000;
    color: #ff9501;
  }
`;

export default StyledCarousel;
