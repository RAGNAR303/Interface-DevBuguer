import { Container } from './styles';
import { Button } from '../Button';
import { formatPrice } from '../../utils/formatPrice';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { useCart } from '../../hooks/CartContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce } from 'react-toastify/unstyled';

export function CartResume() {
  const [deliveryTax] = useState(500);
  const [finalPrice, setFinalPrice] = useState(0);
  const navigate = useNavigate();

  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;

      //  valor * quantidade + com o proximo produto que vier
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      const { data } = await api.post('/create-payment-intent', { products });

      navigate('/checkout', {
        state: data, // mandata as info que estão no "data" para proxima pagina
      });

      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      toast.error('Erro tente novamente');
    }

    // try {
    //   const { status } = await api.post(
    //     '/orders',
    //     {
    //       products,
    //     },
    //     {
    //       validateStatus: () => true,
    //     },
    //   );

    //   if (status === 200 || status === 201) {
    //     setTimeout(() => {
    //       navigate('/');
    //       clearCart();
    //     }, 2000);
    //     toast.success('Pedido Realizado!');
    //   } else if (status === 409) {
    //     toast.error('Falha em processar pedido');
    //   } else {
    //     throw new Error();
    //   }

    //   // eslint-disable-next-line no-unused-vars
    // } catch (error) {
    //   toast.error(`Falha no sistema! Tente novamente`);
    // }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido </h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatPrice(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-botton">
          <h2 className="total">Total</h2>
          <p className="total-price">{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Continuar</Button>
    </div>
  );
}
