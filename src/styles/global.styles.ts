import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    @media (max-width: 500px){
      font-size: 75%;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    padding: 0px;
    ${({ theme }) => css`
      background-color: ${theme.colors.background};
    `}


  }
`;
