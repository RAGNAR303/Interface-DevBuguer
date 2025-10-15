import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import styled from 'styled-components';

export const CustomTable = styled(TableContainer)`
  border-radius: 12px !important;
  background: linear-gradient(180deg, #121f25ff 50%, #121f2587 100%) !important;
  backdrop-filter: blur(20px) !important;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  color: white !important;
`;

export const TableHeadCuston = styled(TableHead)`
  background: ${(props) => props.theme.orange} !important;
`;

export const TableCellProducts = styled(TableCell)`
  color: ${(props) => props.theme.orange} !important;
  font-weight: 600 !important;
  text-align: center !important;
`;



export const ImgProduct = styled.img`
  width: 130px;
  height: 80px;
  object-fit: cover;
`;

export const TablePaginationCuston = styled(TablePagination)`
  color: ${(props) => props.theme.amber} !important;
  font-weight: 900 !important;
  height: 60px;
`;
