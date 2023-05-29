import { ReactElement } from 'react';
import StyledFooter from './Footer';
import { Link } from 'react-router-dom';
import risu from '../../assets/logo/risu.png';

function Footer(): ReactElement {
  return (
    <StyledFooter>
      <div className='container'>
        <div className='container-risu'>
          <Link to={{ pathname: 'https://risu.com.br'}} target='_blank' className='link'>
            <img src={risu} alt="logo-risu" className='risu' />
          </Link>
        </div>
        <nav className='routes'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/adopt'>Adoção</Link></li>
            <li><Link to='/news'>Notícias</Link></li>
            <li><Link to='/about'>Sobre</Link></li>
            <li><Link to='/contact'>Contato</Link></li>
          </ul>
        </nav>
      </div>
      <p className='developer'>developed by <Link className='developer' target='_blank' to={{pathname: 'https://instagram.com/dornellesfr'}}>@dornellesfr</Link> & <Link className='developer' target='_blank' to={{pathname: 'https://www.instagram.com/gustavormzn/'}}>@gustavormzn</Link></p>
    </StyledFooter>
  );
}

export default Footer;
