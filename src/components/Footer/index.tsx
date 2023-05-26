import StyledFooter from './Footer';
import { Link } from 'react-router-dom';
import risu from '../../assets/logo/risu.png';

function Footer() {
  return (
    <StyledFooter>
      <h2>Mais informações</h2>
      <div className='container'>
        <div className='container-risu'>
          <Link to={{ pathname: 'https://risu.com.br'}} target='_blank' className='link'>
            <img src={risu} alt="logo-risu" className='risu' />
          </Link>
        </div>
        <nav className='routes'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Adoção</Link></li>
            <li><Link to='/'>Notícias</Link></li>
            <li><Link to='/'>Sobre</Link></li>
            <li><Link to='/'>Contato</Link></li>
          </ul>
        </nav>
        <div>aa</div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
