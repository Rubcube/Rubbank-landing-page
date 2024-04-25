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

export const FaqSection = styled.section`
  padding: 32px 0;
  gap: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaqCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
`;
