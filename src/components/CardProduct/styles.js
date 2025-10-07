import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #121f25ff;
  background: linear-gradient(180deg, #121f25ff 50%, #121f2587 100%);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  position: relative;
  height: 100%;
  max-height: 230px;
  border-radius: 10px;
  cursor: grab;
  -webkit-box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.5);
`;

export const Offer = styled.div`
  position: absolute;
  color: red;
  right: 5px;
  top: 5px;
`;

export const CardImg = styled.img`
  width: 150px;
  height: 100px;
  position: absolute;
  top: -60px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  padding: 10px;

  h3 {
    color: #ffe079ff;
    text-align: center;
    line-height: 20px;
    font-weight: 800;
  }

  p {
    color: white;
    font-weight: 800;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;

  strong {
    color: #121f25ff;
    font-size: 20px;
    background-color: ${(props) => props.theme.amber};

    padding: 10px;
    border-radius: 5px;
  }
`;
