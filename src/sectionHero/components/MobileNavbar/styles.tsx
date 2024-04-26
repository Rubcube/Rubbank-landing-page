import styled, { css } from "styled-components";

interface NavbarContainerProps {
  menuIsVisible: boolean;
}

export const HamburgerMenuContainer = styled.div<NavbarContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 1s;

  // on click in svg rotate 90 degrees
  > svg {
    transform: ${({ menuIsVisible }) => menuIsVisible ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: all 0.3s;
  }

  // svg hover
  > svg:hover {
    color: ${({ theme }) => theme.colors.darkPurple};
    cursor: pointer;
  }

  ul {
    position: absolute;
    flex-direction: column;
    list-style: none;
    top: 90px;
    left: 0;
    padding-left: 0;
    width: 100%;
    background-color: rgb(53, 58, 122);
    text-align: center;

  }

  a{
      color: white;
      text-decoration: none;
      font-size: ${({ theme }) => theme.font.sizes.large};
  }


  li{
    padding: 1.2rem;
    transition: all 0.3s ease;
  }

  li:hover{
    background-color: ${({ theme }) => theme.colors.darkPurple};
    cursor: pointer;
  }

  @media (min-width: 1048px) {
    display: none;
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};

    ul{
      top: 80px;
    }


  }
`;
