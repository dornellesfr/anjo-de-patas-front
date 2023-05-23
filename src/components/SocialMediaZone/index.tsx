import StyledRedes from './SocialMediaZone';
import instagram from '../../assets/contacts/instagram.png';
import facebook from '../../assets/contacts/facebook.png';
import pataDog from '../../assets/iconsPet/patadog.png';
import pataCat from '../../assets/iconsPet/patagato.png';

function SocialMediaZone() {
  return (
    <StyledRedes>
      <div className="div-icons">
        <img src={pataDog} alt="patas" />
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/projeto.anjosdepatas/"
          >
            <img src={instagram} alt="instagram-img" className="social-icon" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/projetoanjosdepatas/"
          >
            <img src={facebook} alt="facebook-img" className="social-icon" />
          </a>
        </div>
        <img src={pataCat} alt="patas" />
      </div>
    </StyledRedes>
  );
}

export default SocialMediaZone;
