import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0, 0.04);
  height: 52px;
  border: none;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  // Isso vai ignora os estilos nativo dos navegadores de dispositivos móveis
  appearance: none;

  &:focus {
    border-color:${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
