import { Banner, Container, Content, Logo } from './styles';
import LogoPng from '../../assets/logo.png';
import {
  OfferCarousel,
  HomeCarousel,
  CategoriesCarousel,
} from '../../components';
import { useUser } from '../../hooks/UserContext';
export function Home() {
  return (
    <main>
      <HomeCarousel />
      {/* <Banner>
        <Logo src={LogoPng} alt="logo-burgerKing" />
        <h1>Bem-vindo(a)!</h1>
      </Banner> */}
      <Container>
        <Content>
          <CategoriesCarousel />
          <OfferCarousel />
        </Content>
      </Container>
    </main>
  );
}
