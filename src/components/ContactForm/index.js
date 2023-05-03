import PropTypes from 'prop-types';
import { useState } from 'react';

// utils
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

// Estilos
import { Form, ButtonContainer } from './styles';

// Componentes
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

// hooks
import useErrors from '../../hooks/useErrors';

export default function ContactForm({ buttonLabel }) {
  // Controlled Components
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    setError, removeError, getErrorMessageByFielName, errors,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log({
    //   name,
    //   email,
    //   phone,
    //   category,
    // });
  }

  // Verificação se o usuário  preencheu esse campo
  function handleNameChange(event) {
    setName(event.target.value);

    // Lembrando, não podemos utilzar name, pois vai pegar o antigo nome(assíncrona)
    if (!event.target.value) {
      // adicionando o error
      setError({
        field: 'name', message: 'Nome é obrigatório.',
      });
    } else {
      // Remoção do error
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    // O email não é obrigatório
    setEmail(event.target.value);
    // Se o email for inválido, vamos setar um erro no useState errors
    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      // Se o emil for válido, vamos remover o error
      removeError('email');
    }
  }

  function handlePhonechange(event) {
    setPhone(formatPhone(event.target.value));
  }

  return (
    // noValidate = Retira a validação nativa do formulário
    <Form onSubmit={handleSubmit} noValidate>
      {/* Vamos adicionar a chamadar desse erros nos componentes */}
      <FormGroup error={getErrorMessageByFielName('name')}>
        <Input
          error={getErrorMessageByFielName('name')}
          placeholder="Nome *"
          onChange={handleNameChange}
          value={name}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFielName('email')}>
        <Input
          // Adicionar o tipo de input para melhora ux
          type="email"
          error={getErrorMessageByFielName('email')}
          placeholder="E-mail"
          onChange={handleEmailChange}
          value={email}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          // Adicionado a função para tipagem
          onChange={handlePhonechange}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      {/* Adicionando o disabled */}
      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
