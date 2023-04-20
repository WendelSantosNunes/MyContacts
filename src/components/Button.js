import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  border-radius: 4px;
  padding: 0 16px ;
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0 4px 10px rgba(0,0,0, 0.04);
  font-weight: bold;
  color: #FFF;

  transition:  background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: #CCC;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};
    
    &:hover {
      background-color: ${theme.colors.danger.light};
    }

    &:active {
      background-color: ${theme.colors.danger.dark};
    }
  `}
`;
