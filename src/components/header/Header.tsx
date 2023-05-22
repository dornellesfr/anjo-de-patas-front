import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import StyledHeader from './StyledHeader';

function Header(): ReactElement {
  return (
      <StyledHeader>
        <div>
          <Link to="/home">
            <img className='logo-anjo-de-patas' src={logo} alt="logo-anjo-de-patas" />
          </Link>
        </div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Adotar</Link></li>
            <li><Link to="/">Notícias</Link></li>
            <li><Link to="/">Sobre</Link></li>
            <li><Link to="/">Contato</Link></li>
          </ul>
        </div>
      </StyledHeader>
  );
}

export default Header;
