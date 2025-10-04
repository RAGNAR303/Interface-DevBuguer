import LogoPng from '../../assets/logo.png';
import { CartItems, CartResume } from '../../components';
import { Banner, Container, Content, Logo, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <Logo src={LogoPng} alt="logo-burgerKing" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}
