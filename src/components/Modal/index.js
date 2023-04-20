import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Container, Footer, Overleay } from './styles';

import Button from '../Button';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overleay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>
          Copo do modal
        </p>
        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overleay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

// É necessário informar o valor default para propriedade do tipo boleano
Modal.defaultProps = {
  danger: false,
};
