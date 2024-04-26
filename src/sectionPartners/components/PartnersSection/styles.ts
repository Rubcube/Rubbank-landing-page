import styled from 'styled-components';

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.mediumGray};
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

  @media (max-width: 500px) {
    padding: 0 ${({ theme }) => theme.spacings.medium};
  }
`;

export const PartnersSection = styled.section`
  padding: 32px 0;
  gap: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PartnersCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
`;

export const PartnersCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  max-width: 360px;
  width: 100%;
  padding: 32px 4px;
  transition: all 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 8px;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    transform: scale(1.08);
  }
`;

export const PartnersImage = styled.img`
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
