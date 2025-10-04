import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;

  .carrousel-item {
    padding-left: 20px;
  }

  .react-multiple-carousel__arrow {
    background-color: #f17435a1;
    font-weight: 900;
  }
  .react-multiple-carousel__arrow::before {
    color: black;
  }

  .react-multiple-carousel__arrow--left {
    left: 1px;
  }
  .react-multiple-carousel__arrow--right {
    right: 1px;
  }
`;

export const Title = styled.h1`
  color: #f17535;
  font-size: 40px;
  font-family: 'Lilita One', sans-serif;
  text-align: center;
  margin-bottom: 12px;
  position: relative;
  padding-bottom: 10px;
  letter-spacing: 3px;
  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 4px;
    background-color: #f17535;
    bottom: 0;

    left: calc(50% - 50px);
  }
`;
export const ContainerItens = styled.div`
  background: url('${(props) => props.$imageUrl}');
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  padding: 20px;
  margin: 30px 10px;
  -webkit-box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    background-color: #0000007c;
  }

  p {
    display: flex;
    align-items: end;
    background: linear-gradient(180deg, #00000027 5%, #000000b1 100%);
    width: 100%;
    height: 100%;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 26px;
  }
`;
export const CategoryLink = styled(Link)`
  position: absolute;
  bottom: 50px;
  color: white;
  padding: 5px;
  border-radius: 5px;
  z-index: 2;
  text-decoration: none;
  font-size: 30px;
  font-weight: 900;
  transition: color 0.3s ease-in;

  &:hover {
    color: #ffe079ff;
    text-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.5);
  }
`;
