import styled from 'styled-components';
import bg from '../../assets/fundoEditado2.png';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  background-image: url('${bg}');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 50%;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  width: 300px;
  height: 300px;
`;
export const RightContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  max-width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: #ffffffff;
  }

  a {
    color: ${(props) => props.theme.orange};

    text-decoration: none;
    transition: all 0.5s ease-in-out;
  }

  a:hover {
    text-decoration: underline;
  }
`;
export const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  width: 400px;
  font-family: 'Lilita One', sans-serif;
  color: #fff;
  span {
    color: ${(props) => props.theme.orange};

    font-family: 'Lilita One', sans-serif;
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #121f25ff;
  background: linear-gradient(180deg, #121f25ff 50%, #121f2587 100%);
  backdrop-filter: blur(${(props) => props.theme.blur});

  padding: 20px;
  border-radius: 10px;
  gap: 20px;
  width: 100%;
  max-width: 350px;
`;

export const Link = styled(ReactLink)`
  color: ${(props) => props.theme.orange};

  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;
