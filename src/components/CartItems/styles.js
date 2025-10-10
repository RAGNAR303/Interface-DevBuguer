import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductImg = styled.img`
  width: 100px;
  height: 50px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 10px;
  font-size: 20px;
  font-weight: 900;
  width: 120px;
`;

export const EmptyCart = styled.h1`
  text-align: center;
  padding: 20px;
  font-weight: 900;
`;

export const ButtonDelete = styled.button`
  background: none;
  border: none;
  color: #9f0000e2;

  &:hover {
    color: #c10000ff;
  }
`;

export const LinkCart = styled(Link)`
  font-weight: 900;
  color: #fff;
  transition: color 300ms ease-in-out;
  animation: pulsar 0.4s ease-in-out infinite linear;

  &:hover {
    color: #ffe079;
  }

  @keyframes pulsar {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
`;
