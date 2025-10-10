import styled from 'styled-components';
import Select from 'react-select';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';


export const ProductsImg = styled.img`
  width: 100px;
`;

export const SelectStatus = styled(Select)`
  width: 240px;
  font-weight: 900;

  cursor: pointer;
`;


export const CustomTable = styled(TableContainer)`
  border-radius: 12px !important;
  background: linear-gradient(180deg, #121f25ff 50%, #121f2587 100%) !important;
  backdrop-filter: blur(20px) !important;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  color: white !important;
`;

export const TableCellHead = styled(TableCell)`
  color: ${(props) => props.theme.gray} !important;
  font-weight: 800 !important;
  text-align: center !important;
`;

export const TableCellSubHead = styled(TableCell)`
  color: ${(props) => props.theme.amber} !important;
  font-weight: 800 !important;
  text-align: center !important;
`;

export const TableCellOrders = styled(TableCell)`
  color: ${(props) => props.theme.orange} !important;
  font-weight: 600 !important;
  text-align: center !important;
`;

export const TableHeadCuston = styled(TableHead)`
  background: ${(props) => props.theme.orange} !important;
`;

export const TableCellSubText = styled(TableCell)`
  color: ${(props) => props.theme.white} !important;
`;

export const TableCellBox = styled(TableCell)`
  background: #142f3cff !important;
`;

export const Filter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 28px 0;
  gap: 20px;
`;

export const FilterOption = styled.button`
  border: none;
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.amber : props.theme.orange};
  border-bottom: ${(props) =>
    props.$isActiveStatus ? `2px solid ${props.theme.amber}` : 'none'};
  font-weight: 900;
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 10px;
  background: none;
`;
