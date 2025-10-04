import { Container } from './styles';
import { Button } from '../Button';
export function CartResume() {
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido </h2>
          <p className="items">Itens</p>
          <p className="items-price">R$ 20,00</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">R$ 10,00</p>
        </div>
        <div className="container-botton">
          <h2 className="total">Total</h2>
          <p className="total-price">R$ 30,00</p>
        </div>
      </Container>
      <Button>Finalizar Pedido</Button>
    </div>
  );
}
