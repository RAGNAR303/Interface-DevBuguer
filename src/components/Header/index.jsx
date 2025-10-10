import {
  HouseSimpleIcon,
  NotebookIcon,
  ShoppingCartSimpleIcon,
  SignInIcon,
  SignOutIcon,
  UserGearIcon,
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
  Login,
} from './styles';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
import { useCart } from '../../hooks/CartContext';
import { useEffect, useState } from 'react';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();
  const { cartProducts } = useCart();

  const [user, setUser] = useState(null);
  // console.log({adminUser});

  useEffect(() => {
    const data = localStorage.getItem('devburger:userData');

    if (data) {
      try {
        setUser(JSON.parse(data));
      } catch (error) {
        console.error('Nenhum usuario salvo no localstorage', error);
      }
    }
  }, []);

  function isAdminIcon() {
    if (!user) {
      // se nã tiver usuario
      return (
        <Login onClick={() => navigate('/login')}>
          <SignInIcon size={32} weight="bold" />
          <span>Fazer Login</span>
        </Login>
      );
    }
    if (user.admin) {
      // se for usuario administrador
      return (
        <UserGearIcon
          size={32}
          onClick={() => navigate('/admin/pedidos')}
          weight="bold"
        />
      );
    }
    // se for usuario comum
    return <UserIcon size={32} weight="bold" />;
  }

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
            {isAdminIcon()}
            {userInfo.name ? (
              <div>
                <p>
                  Olá,
                  <span>{userInfo.name}</span>
                </p>
                <Logout onClick={() => logoutUser()}>
                  <SignOutIcon size={10} weight="bold" />
                  Sair
                </Logout>
              </div>
            ) : (
              ''
            )}
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
