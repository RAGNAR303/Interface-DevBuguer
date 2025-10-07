import { Route, Routes } from 'react-router';
import {
  Register,
  Cart,
  Home,
  Login,
  Menu,
  CompletePayment,
  Checkout,
  Orders,
  NewProtuct,
  EditProducts,
  Products,
} from '../containers';
import { AdminLayout, UserLayout } from '../components';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompletePayment />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/novo-produto" element={<NewProtuct />} />
        <Route path="/admin/editar-produto" element={<EditProducts />} />
        <Route path="/admin/produtos" element={<Products />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
