import { navLinks } from './navLinks';
import Logo from '../../assets/logo.png';
import { useUser } from '../../hooks/UserContext';
import { Container, NavLinkContainer, NavLink } from './styles';
import { useLocation } from 'react-router-dom';
import { HouseSimpleIcon, SignOutIcon } from '@phosphor-icons/react';
export function SideNavAdmin() {
  const { logout } = useUser();

  const { pathname } = useLocation();

  return (
    <Container>
      <img src={Logo} alt="logo-burgerking" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <footer>
        <NavLink onClick={logout} to={'/login'}>
          <SignOutIcon size={32} weight="bold" />
          <span>Sair</span>
        </NavLink>
        <NavLink to={'/'}>
          <HouseSimpleIcon size={32} weight="bold" />
          <span>Home</span>
        </NavLink>
      </footer>
    </Container>
  );
}
