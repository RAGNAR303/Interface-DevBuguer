import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 8%;
  background: linear-gradient(180deg, #121f25ff 20%, #121f2587 100%);
  backdrop-filter: blur(20px);
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  border-radius: 0 0 10px 10px;

  strong {
    color: #fff;
    font-size: 20px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Options = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 900;
  font-size: 20px;
  color: ${(props) =>
    props.$isActive ? `${props.theme.orange}` : `${props.theme.white}`};
  gap: 5px;

  transition: color 0.5s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.orange};
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.amber};

  p {
    font-weight: 900;
    color: #fff;
    font-size: 15px;
  }

  span {
    color: ${(props) => props.theme.amber};
  }
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 900;
  background: none;
  border: none;
  gap: 5px;
  padding: 2px;
  border-radius: 2px;
  color: ${(props) => props.theme.red};

  transition: color 0.5s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.redHover};

    background: ${(props) => props.theme.gray};
  }
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 10px;
    background-color: ${(props) => props.theme.orange};
    padding: 2px 6px;
    border-radius: 50%;
    color: #000;
  }
`;
