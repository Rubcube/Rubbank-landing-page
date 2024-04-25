import * as styled from './styles';
import Logo from '../../../assets/imgs/logos/bank-factory-eliptical-color.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const FooterSection = () => {

  return(
    <styled.Background>
      <styled.Box>

        <styled.FooterItems>
          <styled.FooterLogo src={Logo} alt="RubBank Logo" />
          <styled.FooterSocialMediaIcons>
            <styled.FooterIcon>
              <FontAwesomeIcon icon={faFacebook} />
            </styled.FooterIcon>
            <styled.FooterIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </styled.FooterIcon>
            <styled.FooterIcon>
              <FontAwesomeIcon icon={faTwitter} />
            </styled.FooterIcon>
            <styled.FooterIcon>
              <FontAwesomeIcon icon={faLinkedin} />
            </styled.FooterIcon>
          </styled.FooterSocialMediaIcons>
        </styled.FooterItems>

        <styled.FooterCopyRight>
          2024 © Rubbank - Designed by Diego Mota
        </styled.FooterCopyRight>

      </styled.Box>
    </styled.Background>
  )

}

export default FooterSection;
