import { Container } from './styles';

// Imagen
import Logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="MyContacts" />
    </Container>
  );
}
