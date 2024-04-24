import styles from "styled-components";

export const HeroContainer = styles.div`
  height: 840px;
  background-color: #c0c0c0;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeroBackground = styles.div`
  background: ${({ theme }) => theme.backgrounds.heroDesktop} no-repeat center;
  height: 840px;
`;

export const HeroOpacity = styles.div`
  background: linear-gradient(153.51deg, #6B7AE5 0%, #353A7A 44.64%, #1F2147 100%);
  background-blend-mode: hard-light;
  opacity: 0.7;
  height: 840px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styles.div`
  max-width: 1366px;
  width: 100%;
  display: flex;
  padding: 0 ${({ theme }) => theme.spacings.large};
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const HeroContent = styles.div`
  display: flex;
  flex-direction: column;
  margin-top: 224px;
  width: 100%;
  align-items: left;
  height: 100%;
  gap: ${({ theme }) => theme.spacings.small};
`;


export const HeroTitle = styles.h1`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.09em;
  line-height: 129%;
`;

export const HeroSubtitle = styles.p`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.09em;
  line-height: 129%;
  width: 55%;
`;
