import * as styled from "./styles";
import logo from "../../../assets/imgs/logos/bank-factory-eliptical-color.svg";
import Button from "../../../common/components/Button/Button";
import { useCallback, useEffect, useState } from "react";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(!scrolled);
    }
  }, [scrolled]);

  useEffect(() => {
      document.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
  }, [handleScroll]);

  const scrollToSection = (sectionId : string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <styled.NavbarContainer scrolled={scrolled}>

      <styled.Box>

        <styled.NavbarLogo src={logo} alt="Logo" />

          <styled.NavbarMenu >

            <styled.NavbarMenuItem>
              <styled.NavbarLink onClick={() => scrollToSection('hero')}>Home</styled.NavbarLink>
            </styled.NavbarMenuItem>

            <styled.NavbarMenuItem>
              <styled.NavbarLink onClick={() => scrollToSection('services')}>Serviços</styled.NavbarLink>
            </styled.NavbarMenuItem>

            <styled.NavbarMenuItem>
              <styled.NavbarLink onClick={() => scrollToSection('partners')}>Parceiros</styled.NavbarLink>
            </styled.NavbarMenuItem>

            <styled.NavbarMenuItem>
              <styled.NavbarLink onClick={() => scrollToSection('news')}>Notícias</styled.NavbarLink>
            </styled.NavbarMenuItem>

            <styled.NavbarMenuItem>
              <styled.NavbarLink onClick={() => scrollToSection('faq')}>Dúvidas</styled.NavbarLink>
            </styled.NavbarMenuItem>

          </styled.NavbarMenu>

          <Button $width="180px" $height="40px" $fontSize="1rem">Abrir Conta</Button>

        <MobileNavbar />

      </styled.Box>
    </styled.NavbarContainer>
  );
}

export default Navbar;
