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
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  & .risu {
    height: 100%;
    width: 100%;
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

  & a:hover {
    color: #ff9501;
    transition: ease-out 0.3s;
    text-decoration: underline;
  }

  & .container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    justify-items: center;
    margin-top: 5%;
  }

  & .routes ul {
    list-style-type: none;
    text-decoration: none;
  }

  & .routes ul li{
    margin: 30% 0;
  }

  & .developer {
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    height: 1000px;

    & .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    }

    & .routes ul li a {
      font-size: 2rem;
    }

    & .form-to-contact {
      display: none;
    }
  }
`;

export default StyledFooter;
