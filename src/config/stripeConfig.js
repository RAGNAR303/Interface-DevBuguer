import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51RMXif2f2PuEjdpFrygJ5WBZgfDRliOMxRtjtcNsdFn8rMjPYw845gY1m9akPlwl9bO1OqK9HUsHZIlkylDSkrR100fxLucZbf',
);

export default stripePromise;
