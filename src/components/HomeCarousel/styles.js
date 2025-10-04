import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  width: 100%;

  .react-multiple-carousel__arrow {
    display: none;
  }

  .go {
    background-color: #f17535;
  }

  .react-multi-carousel-dot--active {
  }
`;

export const ImgContainer = styled.img`
  display: block;
  height: 400px;
  margin: auto;
  width: 100%;
  position: relative;
  object-fit: cover;
  background-position: center;
`;

export const Logo = styled.img`
  width: 200px;
  position: relative;
  left: 30%;
  top: 30%;
`;

export const Banner = styled.div`
  background-position: center;
  background-size: cover;
  height: 350px;
  position: absolute;
  z-index: 2;
  h1 {
    color: #f17535;
    font-size: 50px;
    font-family: 'Lilita One', sans-serif;
    position: relative;
    right: 150%;
    top: 10%;
  }
`;
