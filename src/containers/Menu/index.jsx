import { useEffect, useState } from 'react';
import {
  Banner,
  CategoryMenu,
  Container,
  Content,
  ProductContainer,
  CategoryButton,
} from './styles';
import { formatPrice } from '../../utils/formatPrice';
import { api } from '../../services/api';
import { CardProduct } from '../../components/CardProduct';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowBendUpLeftIcon } from '@phosphor-icons/react';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);



  const navigate = useNavigate();

  const { search } = useLocation(); //

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria');

    if (categoryId) {
      return categoryId;
    }
    return 0;
  });

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCatgorias = [
        { id: 0, name: 'Todas' },
        ...data,
        {
          id: 6,
          name: 'Voltar',
          icon: <ArrowBendUpLeftIcon tamanho={32} peso="negrito" />,
        },
      ];

      setCategories(newCatgorias);
    }

    async function loadProduct() {
      const { data } = await api.get('/products'); // chama api na rota de products

      const newProduct = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      })); // filtrando produtos em oferta

      setProduct(newProduct);
    }
    loadCategories();
    loadProduct();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products); // mostra todoa os produtos
    } else if (activeCategory === 6) {
      navigate('/'); // manda para tela inicial
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      ); // Compara se a catedoria do produto e a mesma seleciona e faz o filtro so para aparecer os produtos equivalentes a ela
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory, navigate]);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR <br />
          HAMBURGUER <br />
          ESTÁ AQUI!
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>
      <Content>
        <CategoryMenu>
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              $isActiveCategory={category.id === activeCategory}
              onClick={() => {
                navigate(
                  {
                    pathname: '/cardapio', // URl do tela
                    search: `?categoria=${category.id}`, // Adiciona na url mostrado quando mudado a catedorias
                  },
                  {
                    replace: true, // ativa a mudança da url no site
                  },
                );
                setActiveCategory(category.id);
              }}
            >
              {category.icon ? category.icon : ''}
              {category.name}
            </CategoryButton>
          ))}
        </CategoryMenu>
        <h1>{}</h1>
        <ProductContainer>
          {filteredProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </ProductContainer>
      </Content>
    </Container>
  );
}
