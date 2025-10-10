import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 230px) 1fr;

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
  }

  section {
    margin: 0 auto;
    padding: 40px 20px;
    width: 1200px;
    max-width: 100%;
  }
`;
