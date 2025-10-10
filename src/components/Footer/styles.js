import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.gray};

  backdrop-filter: blur(${(props) => props.theme.blur});

  padding: 10px;
  h1 {
    color: #fff;
    font-size: 15px;
  }
`;
