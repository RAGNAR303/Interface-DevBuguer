import { MinusIcon, PlusIcon, TrashSimpleIcon } from '@phosphor-icons/react';
import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/formatPrice';
import { Button, CardButton, Table } from '../index';
import {
  ButtonDelete,
  ButtonGroup,
  EmptyCart,
  ProductImg,
  LinkCart,
} from './styles';
import { useNavigate } from 'react-router-dom';

export function CartItems() {
  const { cartProducts, deleteProduct, increaseProduct, decreaseProduct } =
    useCart();
  const navigate = useNavigate;
  console.log(cartProducts);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th colSpan={2}>Itens</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImg src={product.url} alt={product.name} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <CardButton onClick={() => decreaseProduct(product.id)}>
                    <MinusIcon size={20} weight="bold" />
                  </CardButton>
                  {product.quantity}
                  <CardButton onClick={() => increaseProduct(product.id)}>
                    <PlusIcon size={20} weight="bold" />
                  </CardButton>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                {formatPrice(product.quantity * product.price)}
              </Table.Td>
              <Table.Td>
                <ButtonDelete onClick={() => deleteProduct(product.id)}>
                  <TrashSimpleIcon size={20} weight="bold" />
                </ButtonDelete>
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan={7}>
              <EmptyCart>Carrinho vazio</EmptyCart>
              <LinkCart to={'/cardapio'}>Adiconar Produtos</LinkCart>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}
