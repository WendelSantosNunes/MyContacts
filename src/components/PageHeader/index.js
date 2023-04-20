import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Imagem
import arrow from '../../assets/images/icons/arrow.svg';

// Estilo
import { Container } from './styles';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
}

// Necessário instalar o pacote
PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
