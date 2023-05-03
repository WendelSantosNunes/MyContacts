import { useState } from 'react';

export default function useErrors() {
  // Vamos utilizar esse useState para armazenar todos os erros do formulário
  // Vamos habilitar o botão de envior quando não encontrar erros no formulário
  const [errors, setErrors] = useState([]);

  // Função padrão para criação dos erros do formulário
  function setError({ field, message }) {
    const errorAlreadtExists = errors.find((error) => error.field === field);

    if (errorAlreadtExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  // Função padrão para remoção dos erros do formulário
  function removeError(fieldName) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  // Sempre escrever o nome que seja fácil de entender
  function getErrorMessageByFielName(fieldName) {
    // Estamos utilizando a ? para evitar error quando o array for vazio
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    setError,
    removeError,
    getErrorMessageByFielName,
    errors,
  };
}
