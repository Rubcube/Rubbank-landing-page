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
    background-color: rgb(53, 58, 122, 0.7);
  `}
  transition: background-color 0.5s;
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

export const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
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

export const NavbarButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid white;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: medium;
  border-radius: 5px;
  cursor: pointer;
`;

export const NavbarLogo = styled.img`
  width: 200px;
`;
