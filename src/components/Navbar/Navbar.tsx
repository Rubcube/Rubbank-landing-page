import * as styled from "./styles";
import logo from "../../assets/imgs/logos/bank-factory-eliptical-color.svg";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <styled.NavbarContainer>

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

    </styled.NavbarContainer>
  );
}

export default Navbar;
