import { createBrowserRouter } from 'react-router';
import { Register, Cart, Home, Login, Menu } from '../containers';
import { Header, Footer } from '../components';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />,
        <Footer />
      </>
    ),
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />,
        <Footer />
      </>
    ),
  },
  {
    path: '/carrinho',
    element: <Cart />,
  },
]);
