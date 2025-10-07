import styled from 'styled-components';
import bg from '../../assets/textura.jpg';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
`;

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('${bg}');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 80px;
  margin-top: 30px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.orange};

  text-align: center;
  margin: 10px;
  font-weight: 900;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 10px;

  &::after {
    position: absolute;
    content: '';
    width: 100px;
    height: 4px;
    background-color: ${(props) => props.theme.orange};

    bottom: 0;
    left: calc(50% - 50px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

 
`;
