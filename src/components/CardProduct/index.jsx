import { BasketIcon, SealPercentIcon } from '@phosphor-icons/react';
import { CardButton } from '../CardButton';
import { CardImg, Container, Content, ContainerButton, Offer } from './styles';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/CartContext';

CardProduct.PropTypes = {
  product: PropTypes.object,
};

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  return (
    <Container key={product.key}>
      <Offer>
        {product.offer ? <SealPercentIcon size={32} weight="bold" /> : ''}
      </Offer>
      <CardImg src={product.url} alt={product.name} />
      <Content>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </Content>
      <ContainerButton>
        <strong>{product.currencyValue}</strong>
        {/* <CardButton>{<BasketIcon size={32} weight="fill" />}</CardButton> */}
        <CardButton onClick={() => putProductInCart(product)}>
          {<BasketIcon size={32} weight="fill" />}
        </CardButton>
      </ContainerButton>
    </Container>
  );
}
