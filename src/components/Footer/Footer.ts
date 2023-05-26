import styled from 'styled-components';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 50vh;
  background-color: #111212;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .container-risu {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .risu {
    height: 60%;
    width: 60%;
  }

  & h2 {
    padding: 2% 0 1% 0;
    font-size: 2rem;
  }

  & a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
  }

  & .container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    justify-items: center;
  }

  & .routes ul {
    list-style-type: none;
    text-decoration: none;
  }

  & .routes ul li{
    margin: 20% 0;
  }
`;

export default StyledFooter;
