import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 840px;
  background-color: #c0c0c0;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 500px) and (max-height: 800px) {
    height: 80vh;
  }
`;

export const HeroBackground = styled.div`
  background: ${({ theme }) => theme.backgrounds.heroDesktop} no-repeat center;
  height: 100%;

  @media (max-width: 500px) {
    // align background image to bottom
    background: ${({ theme }) => theme.backgrounds.heroMobile} no-repeat bottom;
  }
`;

export const HeroOpacity = styled.div`
  // background gradient with 3 colors and opacity
  background: linear-gradient(153.51deg, rgba(107, 122, 229, 0.7) 0%, rgba(53, 58, 122, 0.7) 44.64%, rgba(31, 33, 71, 0.7) 100%);
  background-blend-mode: hard-light;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const Box = styled.div`
  max-width: 1366px;
  width: 100%;
  display: flex;
  padding: 0 ${({ theme }) => theme.spacings.large};
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 500px){
      padding: 0 ${({ theme }) => theme.spacings.medium};
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 324px;
  width: 100%;
  align-items: left;
  height: 100%;
  gap: ${({ theme }) => theme.spacings.small};

  @media (max-width: 500px){
      margin-top: 200px;
      align-items: center;
      justify-content: center;
  }
`;


export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.09em;
  line-height: 129%;

  @media (max-width: 500px){
      text-align: center;
      font-size: 2.5rem;
  }
`;

export const Bold = styled.span`
  font-weight: 700;

  @media (max-width: 500px){
      font-size: 2.5rem;;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.09em;
  line-height: 129%;
  width: 55%;

  @media (max-width: 500px){
      text-align: center;
      width: 100%;
      margin-bottom: 100px;
  }
`;
