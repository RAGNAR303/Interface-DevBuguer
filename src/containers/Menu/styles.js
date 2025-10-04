import styled from 'styled-components';
import banner from '../../assets/Hamburguerhome.svg';
import background from '../../assets/background1.png';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${banner}');
  background-position: center;
  background-size: cover;
  height: 400px;
  position: relative;
  background-color: #000000ff;

  h1 {
    color: #f17535;
    font-size: 50px;
    font-family: 'Lilita One', sans-serif;
    position: absolute;
    right: 20%;
    bottom: 10%;
    z-index: 2;
  }
  span {
    display: block;
    color: white;
    font-size: 20px;
  }
`;

export const Content = styled.div`
  padding: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  /* background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('${background}');
  background-position: center;
  background-color: #121218ff; */
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 100px;
  background-color: #121f25ff;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const CategoryButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  padding: 5px;
  border-radius: 5px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  transition:
    color,
    background,
    0.3s ease-in;
  color: ${(props) => (props.$isActiveCategory ? '#121f25ff' : '#ffe079ff')};
  background: ${(props) => (props.$isActiveCategory ? '#f17535' : 'none')};

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 100px 50px;

  max-width: 1000px;
`;
