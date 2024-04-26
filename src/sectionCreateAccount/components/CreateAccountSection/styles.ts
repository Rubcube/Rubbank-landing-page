import styled from 'styled-components';

export const Background = styled.div`
  background-image: ${({ theme }) => theme.backgrounds.createAccount};
  height: 398px;
`;

export const BackgroundOpacity = styled.div`
  background: linear-gradient(180deg, rgba(107, 122, 229, 0.28) 0%, #1F2147 100%);
  height: 100%;
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

export const CreateAccountSection = styled.section`
  padding: 32px 0;
  gap: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateAccountTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.09em;
  line-height: 129%;
  text-align: center;
  width: 50%;

  @media (max-width: 500px){
    width: 90%;
  }
`;

