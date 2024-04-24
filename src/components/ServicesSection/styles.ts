import styled from 'styled-components';

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

export const ServicesSections = styled.section`
  padding: 32px 0;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServicesTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 129%;
  text-transform: uppercase;
`;

export const ServicesDescription = styled.p`
  width: 80%;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.sizes.small};
  line-height: 129%;
  text-align: center;
  letter-spacing: 0.09em;
  color: ${({ theme }) => theme.colors.textLightGray};
`;

export const ServicesItems = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
`;

export const ServicesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  gap: 48px;
  max-width: 360px;
  width: 100%;
  padding: 32px 4px;
  transition: all 0.5s ease-in-out;

  &:hover {
    // expand
    cursor: pointer;
    transform: scale(1.08);
  }
`;

export const ServicesItemImg = styled.img`
  width: 56px;
  height: 56px;
`;

export const ServicesItemTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.serviceItemTitle};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 129%;
`;

export const ServicesItemDescription = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.serviceItemDescription};
  font-style: normal;
  font-weight: 400;
  line-height: 129%;
  letter-spacing: 0.09em;
  color: ${({ theme }) => theme.colors.textLightGray};
  text-align: center;
`;





