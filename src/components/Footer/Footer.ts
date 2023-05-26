import styled from 'styled-components';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 50vh;
  background-color: #111212;
  color: white;
  
  & .container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
  }
`;

export default StyledFooter;
