import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Carrossel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, ContainerItens, Title, CategoryLink } from './styles';
import { useNavigate } from 'react-router-dom';

export function CategoriesCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 930 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 930, min: 690 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 1,
    },
  };

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <Title>Categorias</Title>
      <Carrossel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carrousel-item"
        autoPlay={true}
      >
        {categories.map((category) => (
          <ContainerItens key={category.id} $imageUrl={category.url}>
            <CategoryLink
              onClick={() => {
                navigate({
                  pathname: '/cardapio', // URl do tela
                  search: `?categoria=${category.id}`, // Adiciona na url mostrado quando mudado a catedorias
                });
              }}
            >
              {category.name}
            </CategoryLink>
            <p>{category.description}</p>
          </ContainerItens>
        ))}
      </Carrossel>
    </Container>
  );
}
