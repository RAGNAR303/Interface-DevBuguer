import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Carrossel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Title } from './styles';
import { CardProduct } from '../CardProduct';
import { formatPrice } from '../../utils/formatPrice';

export function OfferCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 930 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 930, min: 690 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 1,
    },
  };

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('/products'); // chama api na rota de products

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => ({
          currencyValue: formatPrice(product.price),
          ...product,
        })); // filtrando produtos em oferta

      setOffers(onlyOffers);
    }

    loadOffers();
  }, []);

  return (
    <Container>
      <Title>Ofertas</Title>
      <Carrossel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carrousel-item"
      >
        {offers.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Carrossel>
    </Container>
  );
}
