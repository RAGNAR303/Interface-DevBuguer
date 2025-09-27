import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  label {
    color: #f17535;
  }

  div {
    overflow: hidden;
    border-bottom: 1px solid #f17535;
    width: 100%;
    border-radius: 5px 5px 0 0;
    background-color: #152c379e;
  }

  input {
    width: 100%;
    padding: 5px;
    color: #fff;
    border: none;
    background-color: transparent;
  }

  span {
    text-align: center;
    color: #c10000ff;
    font-size: 10px;
  }
`;
