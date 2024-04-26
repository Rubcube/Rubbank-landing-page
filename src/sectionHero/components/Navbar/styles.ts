import styled from 'styled-components';

export const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // fix on top
  position: fixed;
  top: 0;
  z-index: 1000;

  // change background color when scroll
  ${({ scrolled, theme }) => scrolled && `
    background-color: rgb(53, 58, 122, 0.9);
  `}
  transition: background-color 0.5s;

  @media (max-width: 1048px) {
    background-color: rgb(53, 58, 122);

    // display none in the button and the menu links
    > div > button {
      display: none;
    }

    > div > ul {
      display: none;
    }
  }
`;

export const Box = styled.div`
  max-width: 1366px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings.xsmall} ${({ theme }) => theme.spacings.large};
`;

export const NavbarDisplayNone = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1048px) {
    display: none;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  margin-inline: 10px;
  align-items: center;
`;

export const NavbarMenuItem = styled.li`
  margin-right: ${({ theme }) => theme.spacings.large};

  &:last-child {
    margin-right: 0;
  }

`;

export const NavbarLink = styled.a`
  font-size: ${({ theme }) => theme.font.sizes.small};
  text-decoration: none;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 0px solid ${({ theme }) => theme.colors.white};
  transition: all 1s ease-in-out;


  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.white};
    transition: width .3s;
  }

  &:hover::after {
      width: 100%;
  }
`;

export const NavbarLogo = styled.img`
  width: 200px;

  @media (max-width: 412px) {
    max-width: 191px;
    width: 100%;
  }
`;
