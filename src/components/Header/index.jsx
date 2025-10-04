import {
  HouseSimpleIcon,
  NotebookIcon,
  ShoppingCartSimpleIcon,
  SignOutIcon,
  UserIcon,
} from '@phosphor-icons/react';
import {
  Container,
  HeaderLink,
  Logout,
  Navigation,
  Options,
  Profile,
  CountContainer,
} from './styles';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import { useCart } from '../../hooks/CartContext';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();

  const { pathname } = useResolvedPath();
  const { cartProducts } = useCart();

  function logoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Navigation>
        <Options>
          <HeaderLink $isActive={pathname === '/'} to={'/'}>
            <HouseSimpleIcon size={25} weight="bold" />
            Home
          </HeaderLink>
          <strong>|</strong>
          <HeaderLink $isActive={pathname === '/cardapio'} to={'/cardapio'}>
            <NotebookIcon size={25} weight="bold" />
            Cardápio
          </HeaderLink>
        </Options>
        <Options>
          <Profile>
            <UserIcon size={32} weight="bold" />
            <div>
              <p>
                Olá,
                {userInfo.name ? (
                  <span>{userInfo.name}</span>
                ) : (
                  <span>Fazer Login</span>
                )}
              </p>
              <Logout onClick={() => logoutUser()}>
                <SignOutIcon size={10} weight="bold" />
                Sair
              </Logout>
            </div>
          </Profile>
          <strong>|</strong>
          <HeaderLink to={'/carrinho'}>
            <CountContainer>
              <span>{cartProducts && cartProducts.length}</span>
              <ShoppingCartSimpleIcon size={25} weight="bold" />
            </CountContainer>
            Carrinho
          </HeaderLink>
        </Options>
      </Navigation>
    </Container>
  );
}
