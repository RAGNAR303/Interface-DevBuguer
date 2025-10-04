import styled from 'styled-components';
import banner from '../../assets/bannerhome.svg';
import background from '../../assets/background1.png';

export const Logo = styled.img`
  width: 100px;
`;

export const Banner = styled.div`
  background-image: url('${banner}');
  background-position: center;
  background-size: cover;
  height: 350px;
  position: relative;

  h1 {
    color: #f17535;
    font-size: 50px;
    font-family: 'Lilita One', sans-serif;
    position: absolute;
    right: 20%;
    bottom: 10%;
  }
`;

export const Container = styled.section`
  /* background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('${background}');
  background-position: center;
  background-color: #121218ff; */
  height: 100%;
`;

export const Content = styled.div``;
