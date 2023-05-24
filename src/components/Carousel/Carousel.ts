import styled from 'styled-components';

const StyledCarousel = styled.div`
  width: 80%;
  height: 60vh;
  margin: 1.5rem auto auto auto;

  & .left-arrow {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 50px;
    left: 40px;
    z-index: 1;
    cursor: pointer;
  }

  & .right-arrow {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 50px;
    right: 40px;
    z-index: 1;
    cursor: pointer;
  }


  & .container-carousel {
    height: 100%;
    position: relative;
  }

  & .carousel-image {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-size: cover;
    background-position: center;
  }

  & .description-slide {
    position: absolute;
    top: 80%;
    left: 10%;
    font-size: 1.8rem;
    color: white;
    text-shadow: 1px 1px 1px black;
  }

  & .dots-container {
    display: flex;
    justify-content: center;
  }

  & .dot {
    margin: 5px 2px;
    cursor: pointer;
    font-size: 15px;
  }
`;

export default StyledCarousel;