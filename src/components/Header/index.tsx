import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import StyledHeader from './Header';

function Header(): ReactElement {
  return (
      <StyledHeader>
        <div className='div-header-img'>
          <Link to="/home">
            <img className='logo-anjo-de-patas' src={logo} alt="logo-anjo-de-patas" />
          </Link>
        </div>
        <ul className='ul-header'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Adotar</Link></li>
          <li><Link to="/">Notícias</Link></li>
          <li><Link to="/">Sobre</Link></li>
          <li><Link to="/">Contato</Link></li>
        </ul>
      </StyledHeader>
  );
}

export default Header;
