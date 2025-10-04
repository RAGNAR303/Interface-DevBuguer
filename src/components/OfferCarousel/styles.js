import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 10px;
  overflow-x: hidden;

  .carrousel-item {
    padding: 0 20px;
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  .react-multiple-carousel__arrow {
    top: 0;
    background-color: #f17435a1;
    font-weight: 900;
  }
  .react-multiple-carousel__arrow::before {
    color: black;
  }

  .react-multiple-carousel__arrow--left {
    left: 1px;
  }
  .react-multiple-carousel__arrow--right {
    right: 1px;
  }
`;

export const Title = styled.h1`
  color: #ffe079ff;
  font-size: 40px;
  letter-spacing: 3px;
  font-family: 'Lilita One', sans-serif;
  text-align: center;
  margin-bottom: 100px;
  position: relative;
  padding-bottom: 10px;
  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 4px;
    background-color: #ffe079ff;
    bottom: 0;
    left: calc(50% - 50px);
  }
`;
