import styles from "styled-components";

export const Button = styles.button<{ $width?: string,  $height?: string, $fontSize?: string}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 27px;
  gap: 9px;

  width: ${props => props.$width || "auto"};
  height: ${props => props.$height || "auto"};

  background: linear-gradient(to right, ${({ theme }) => theme.colors.secondaryColor} 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .5s ease-out;
  border-radius: 8px;
  border: none;

  font-size: ${({$fontSize, theme}) => $fontSize ? $fontSize : theme.font.sizes.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryColor};,

  &::after {
    content: '';
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primaryColor};
    transition: width .3s;
  }

  &:hover {
    background-position: left bottom;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.sizes.medium};
`;



