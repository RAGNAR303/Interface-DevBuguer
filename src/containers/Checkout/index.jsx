import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

import stripePromise from '../../config/stripeConfig';
import CheckoutForm from '../../components/Stripe/CheckoutForm';
import { CartScreen } from '../../components/CartScreen';

export function Checkout() {
  const {
    state: { clientSecret },
  } = useLocation();

  if (!clientSecret) {
    return <div>Erro, Volte e tente novamente</div>;
  }

  return (
    <CartScreen
      title={'Checkout - Pagamento'}
      children={
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      }
    />
  );
}
