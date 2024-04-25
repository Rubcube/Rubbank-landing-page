import * as styled from "./styles";
import logo from "../../../assets/imgs/logos/bank-factory-eliptical-color.svg";
import Button from "../../../common/components/Button/Button";
import { useCallback, useEffect, useState } from "react";

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

  return (
    <styled.NavbarContainer scrolled={scrolled}>

      <styled.Box>

        <styled.NavbarLogo src={logo} alt="Logo" />

        <styled.NavbarMenu>

          <styled.NavbarMenuItem>
            <styled.NavbarLink href="#home">Home</styled.NavbarLink>
          </styled.NavbarMenuItem>

          <styled.NavbarMenuItem>
            <styled.NavbarLink href="#services">Serviços</styled.NavbarLink>
          </styled.NavbarMenuItem>

          <styled.NavbarMenuItem>
            <styled.NavbarLink href="#about">Parceiros</styled.NavbarLink>
          </styled.NavbarMenuItem>

          <styled.NavbarMenuItem>
            <styled.NavbarLink href="#contact">Notícias</styled.NavbarLink>
          </styled.NavbarMenuItem>

          <styled.NavbarMenuItem>
            <styled.NavbarLink href="#contact">Dúvidas</styled.NavbarLink>
          </styled.NavbarMenuItem>

        </styled.NavbarMenu>

        <Button $width="180px" $height="40px" $fontSize="1rem">Abrir Conta</Button>
      </styled.Box>
    </styled.NavbarContainer>
  );
}

export default Navbar;
