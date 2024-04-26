import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 129%;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 500px){
    font-size: ${({ theme }) => theme.font.sizes.large};
  }
`;
