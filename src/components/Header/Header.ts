import styled from 'styled-components';

const Header = styled.header`
  font-family: 'Lilita One';
  background-color: #FF9501;
  height: 20vh;
  display: flex;
  align-items: center;
  text-shadow: 0px 0px 1px #000;
  & .logo-anjo-de-patas {
    height: 15vh;
  }
  & .div-header-img {
    width: 50%;
    display: flex;
    padding-left: 10%;
  }
  & .ul-header {
    width: 80%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
  }
  & .ul-header li a{
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
  }
`;
export default Header;