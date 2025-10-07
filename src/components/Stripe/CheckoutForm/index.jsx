/* eslint-disable no-unused-vars */
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles.css';

import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/CartContext';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { dpmCheckerLink },
  } = useLocation();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe ou Elements com falha, tente novamente!! ');
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    console.log(paymentIntent);

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        const products = cartProducts.map((products) => {
          return {
            id: products.id,
            quantity: products.quantity,
            price: products.price,
          };
        });
        const { status } = await api.post(
          '/orders',
          { products },
          {
            validateStatus: () => true,
          },
        );
        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate(
              `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
            );
          }, 3000);
          clearCart();
          toast.success('Pedido realizado com sucesso!');
        } else if (status === 409) {
          toast.success('Falha em realizar seu pedido!');
        } else {
          throw new Error();
        }
      } catch (error) {
        toast.error(' Falha no sistema! Tente novamente!');
      }
    } else {
      navigate(
        `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'accordion',
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Pagar Agora'
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      <div id="dpm-annotation">
        <p className="text-metodos">
          Os métodos de pagamento são exibidos dinamicamente com base na
          localização do cliente, valor do pedido e moeda.&nbsp;
          <a
            href={dpmCheckerLink}
            target="_blank"
            rel="noopener noreferrer"
            id="dpm-integration-checker"
            className="link"
          >
            Visualizar métodos de pagamento por transação
          </a>
        </p>
      </div>
    </div>
  );
}
