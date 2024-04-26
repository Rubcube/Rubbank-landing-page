import React, { useState } from 'react';
import * as styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';



// make a hamburger menu that will be displayed on mobile devices
const HamburgerMenu = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  const scrollToSection = (sectionId : string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuIsVisible(false);
  };

  return (
    <styled.HamburgerMenuContainer menuIsVisible={menuIsVisible}>
      {menuIsVisible ?
        <FontAwesomeIcon icon={faClose} onClick={handleMenuVisibility} /> :
        <FontAwesomeIcon icon={faBars} onClick={handleMenuVisibility} />
        }
      {menuIsVisible &&
        <ul>

            <li>
              <a href="#home" onClick={() => scrollToSection('hero')}>Home</a>
            </li>

            <li>
              <a href="#services" onClick={() => scrollToSection('services')}>Serviços</a>
            </li>

            <li>
              <a href="#about" onClick={() => scrollToSection('partners')}>Parceiros</a>
            </li>

            <li>
              <a href="#contact" onClick={() => scrollToSection('news')}>Notícias</a>
            </li>

            <li>
              <a href="#contact" onClick={() => scrollToSection('faq')}>Dúvidas</a>
            </li>

        </ul>
      }
    </styled.HamburgerMenuContainer>
  );
}

export default HamburgerMenu;
