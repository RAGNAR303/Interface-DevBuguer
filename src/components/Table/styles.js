import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #121f25ff;
  background: linear-gradient(180deg, #121f25ff 50%, #121f2587 100%);
  backdrop-filter: blur(20px);
`;

export const Header = styled.thead`
  background-color: #121f25ff;
`;
export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  font-size: 18px;
  text-transform: uppercase;
  color: #ffe079ff;
  text-align: center;
  border-bottom: 1px solid #f17535;

  &:last-child {
    border-top-left-radius: 10px;
  }
  &:first-child {
    border-top-right-radius: 10px;
  }
`;
export const Td = styled.td`
  padding: 16px;
  color: #fff;
  text-align: center;
  font-weight: 500;
  line-height: 115%;
`;

export const Body = styled.tbody``;
