import styled from 'styled-components';

export const FaqCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  box-sizing: border-box;
  gap: 16px;
  width: 100%;
  transition: all 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
`;

export const FaqQuestion = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-style: normal;
  font-weight: 400;
  padding: 16px;
  color: ${({ theme }) => theme.colors.textDarkGray};
  background-color: #f4f4f4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;


export const FaqQuestionContent = styled.span`
  width: 90%;
`;

export const FaqIcon = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.textDarkGray};
`;

export const FaqAnswer = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.textLightGray};
  padding: 16px;
`;
