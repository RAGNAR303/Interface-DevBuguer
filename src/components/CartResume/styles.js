import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 20px;
  border-collapse: collapse;
  border: 2px solid #121f25ff;
  background: linear-gradient(180deg, #121f25ff 50%, #121f2587 100%);
  backdrop-filter: blur(20px);

  .container-top {
    display: grid;
    grid-gap: 10px 20%;
    padding-bottom: 10px;
    font-weight: 500;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';
  }

  .title {
    grid-area: title;
    text-align: center;
    border-bottom: 1px solid ${(props) => props.theme.orange};
    margin-bottom: 20px;
    padding-bottom: 10px;
    color: ${(props) => props.theme.amber};

    text-transform: uppercase;
  }

  .items {
    grid-area: items;
  }
  .items-price {
    grid-area: items-price;
  }
  .delivery-tax {
    grid-area: delivery-tax;
  }
  .delivery-tax-price {
    grid-area: delivery-tax-price;
  }

  .container-botton {
    display: grid;
    grid-gap: 10px 20%;
    margin-top: 20px;
    grid-template-areas: 'total total-price';
  }

  .total {
    grid-area: total;
  }
  .total-price {
    grid-area: total-price;
    text-align: right;
    font-weight: 600;
    font-size: 24px;
  }
`;
