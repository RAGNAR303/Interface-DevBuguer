import LogoPng from '../../assets/logo.png';
import { CartItems, CartResume } from '../../components';
import { Banner, Container, Content, Logo, Title } from './styles';

export function CartScreen({ children, title }) {
  return (
    <Container>
      <Banner>
        <Logo src={LogoPng} alt="logo-burgerKing" />
      </Banner>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
}
