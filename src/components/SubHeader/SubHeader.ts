import styled from "styled-components";

interface bg {
  background: string;
}

const StyledSubHeader = styled.div<bg>`
  background-image: url(${(props) => props.background});
  height: 50vh;
  background-position: center;
  position: relative;

  .color-background {
    position: absolute;
    background-color: #ff9501;
    opacity: 0.3;
    z-index: 1;
    height: 100%;
    width: 100%;
  }

  & h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-family: 'Lilita One';
    font-weight: 100;
    font-size: 3rem;
    color: white;
    -webkit-text-stroke: black 1px;
  }
`;

export default StyledSubHeader;
