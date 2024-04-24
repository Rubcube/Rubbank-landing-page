import * as styled from "./styles";
import React from "react";
import Button from "../Button/Button";

interface HeroProps {
  children: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <styled.HeroContainer>
      <styled.HeroBackground>
        <styled.HeroOpacity>

          <styled.Box>

            {children}

            <styled.HeroContent>

              <styled.HeroTitle>No seu tempo, no seu controle.</styled.HeroTitle>
              <styled.HeroSubtitle>Venha transformar sua expêriencia financeira.</styled.HeroSubtitle>
              <Button $width="222px" $height="62px">Abrir Conta</Button>

            </styled.HeroContent>

          </styled.Box>

        </styled.HeroOpacity>
      </styled.HeroBackground>
    </styled.HeroContainer>
  );
}

export default Hero;
