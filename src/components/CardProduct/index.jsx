import { BasketIcon, PlusIcon, SealPercentIcon } from '@phosphor-icons/react';
import { CardButton } from '../CardButton';
import { CardImg, Container, Content, ContainerButton, Offer } from './styles';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/CartContext';
import { useNavigate } from 'react-router-dom';
import ProductRating from '../Rating';

CardProduct.PropTypes = {
  product: PropTypes.object,
};

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  const navigate = useNavigate();

  return (
    <Container key={product.key}>
      <Offer>
        {product.offer ? <SealPercentIcon size={32} weight="bold" /> : ''}
      </Offer>
      <CardImg src={product.url} alt={product.name} />
      <Content>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ProductRating />
      </Content>
      <ContainerButton>
        <strong>{product.currencyValue}</strong>
        <CardButton onClick={() => navigate('/carrinho')}>
          {<BasketIcon size={25} weight="bold" />}
        </CardButton>
        <CardButton onClick={() => putProductInCart(product)}>
          {<PlusIcon size={25} weight="bold" />}
        </CardButton>
      </ContainerButton>
    </Container>
  );
}
