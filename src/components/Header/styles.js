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
  color: ${(props) => (props.$isActive ? '#f17535' : '#fff')};
  gap: 5px;

  transition: color 0.5s ease-in-out;

  &:hover {
    color: #f17535;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #ffe079ff;
  p {
    font-weight: 900;
    color: #fff;
    font-size: 15px;
  }

  span {
    color: #ffe079ff;
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
  color: #7b7b7bff;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: #bd0000ff;
    background: #121f25b5;
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
    background: #616161ff;
    padding: 2px 6px;
    border-radius: 50%;
  }

  span:hover {
    color: #000;
  }
`;
