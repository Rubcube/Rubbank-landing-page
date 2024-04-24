import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    padding: 0px;
    ${({ theme }) => css`
      background-color: ${theme.colors.background};
    `}
  }
`;
