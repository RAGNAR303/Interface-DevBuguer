import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: #f17535;
  color: #fff;
  font-weight: 900;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  transition: 0.2s ease-in-out;

  p {
    transition: 0.2s ease-in-out;
    text-transform: uppercase;
  }

  p:hover {
    transform: scale(1.1);
  }

  &:hover {
    opacity: 90%;
    transform: translateY(-2px);
    box-shadow: 1px 1px 10px #00000093;
  }
`;
