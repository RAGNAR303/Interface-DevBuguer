import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;

  div {
    display: flex;
    align-items: center;
    overflow: hidden;
    border-bottom: 1px solid ${(props) => props.theme.orange};
    width: 100%;
    border-radius: 5px 5px 0 0;
    background: ${(props) => props.theme.gray50};
  }

  svg {
    color: ${(props) => props.theme.orange};
  }

  input {
    width: 100%;
    padding: 5px 10px;
    color: ${(props) => props.theme.white};
    border: none;
    background-color: transparent;
    font-weight: 600;
  }

  input::placeholder {
    color: ${(props) => props.theme.orange};
    font-weight: 900;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,  // remove css padrão do auto complete de email dos navegadores
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px ${(props) => props.theme.gray50} inset !important; /* cor de fundo original */
    -webkit-text-fill-color: #fff !important; /* cor do texto */
    transition: background-color 5000s ease-in-out 0s; /* truque p/ evitar piscada */
  }

  span {
    text-align: center;
    color: ${(props) => props.theme.redHover};
    font-size: 10px;
  }
`;
