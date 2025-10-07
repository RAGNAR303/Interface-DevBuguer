import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #121f25ff;
  background: linear-gradient(180deg, #121f25ff 50%, #121f2587 100%);
  backdrop-filter: blur(20px);
  border-radius: 0 10px 10px 0;
  gap: 20px;
  height: 100vh;


  img {
    width: 40%;
    margin: 2px auto;
  }

  footer {
    display: flex;
    justify-content: space-around;
    margin-top: auto;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) =>
    props.$isActive ? `${props.theme.gray}` : `${props.theme.amber}`};
  background: ${(props) =>
    props.$isActive ? `${props.theme.orange}` : 'none'};
  font-weight: 900;
  font-size: 20px;
  margin-top: 10px;
  padding: 10px 10px;
  border-radius: 10px;


  &:hover {
    color: ${(props) => props.theme.gray};
    background: ${(props) => props.theme.orange};
    opacity: 80%;
  }
`;
