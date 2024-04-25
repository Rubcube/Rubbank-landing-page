import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPurple};
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
  margin: 0 auto;
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.spacings.large};
  margin-top: 32px;
`;

export const FooterLogo = styled.img`
  width: 200px;
`;

export const FooterSocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.small};
`;

export const FooterIcon = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const FooterCopyRight = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.small};
`;
