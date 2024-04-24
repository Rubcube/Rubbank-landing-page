import heroMobile from '../assets/imgs/background-hero/hero-mobile.png';
import heroDesktop from '../assets/imgs/background-hero/hero-desktop-v2.png';

export const theme = {
  colors: {
    primaryColor: '#353A7A',
    secondaryColor: '#6B7AE5',
    tertiaryColor: '#4447BE',
    quartenaryColor: '#535AD8',
    darkPurple: '#1F2147',
    white: '#FFFFFF',
    background: '#FFFFFF',
    mediumGray: '#F4F4F4',
    textLightGray: '#858585',
    textDarkGray: '#808080'

  },
  font: {
    family: {
      default: "'Poppins', sans-serif",
    },
    sizes: {
      xsmall: '0.8rem',
      serviceItemTitle: '1.125rem',
      serviceItemDescription: '1rem',
      small: '1.25rem',
      medium: '1.5rem',
      large: '1.8rem',
      xlarge: '2.8rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  backgrounds: {
    heroMobile: `url(${heroMobile})`,
    heroDesktop: `url(${heroDesktop})`,
  },
};
