import styled from "styled-components";

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

export const NewsSection = styled.section`
  padding: 32px 0;
  gap: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewsCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
`;

export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  max-width: 360px;
  width: 100%;
  padding: 32px 4px;
  transition: all 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;

  &:hover {
    transform: scale(1.08);
  }
`;

export const NewsImage = styled.img`
  width: auto;
  height: auto;
  max-width: 93px;
  max-height: 35px;
`;

export const NewsDescription = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.textLightGray};
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: 129%;
`;

export const NewsLink = styled.a`
  font-size: ${({ theme }) => theme.font.sizes.small};
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryColor};
  border-bottom: 0px solid ${({ theme }) => theme.colors.primaryColor};
  transition: all 1s ease-in-out;
  text-transform: uppercase;


  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primaryColor};
    transition: width .3s;
  }

  &:hover::after {
      width: 100%;
  }
`;
