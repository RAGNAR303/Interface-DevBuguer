import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import {
  ProductsImg,
  SelectStatus,
  TableCellBox,
  TableCellOrders,
  TableCellSubHead,
  TableCellSubText,
} from './styles';
import { orderStatusOptions } from './orderStatus';
import { api } from '../../../services/api';

export function Row({ row, orders, setOrders }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  async function newStatusOrder(id, status) {
    try {
      setLoading(true);
      await api.put(`orders/${id}`, { status });

      const newOrders = orders.map((order) =>
        order._id === id ? { ...order, status } : order,
      );

      setOrders(newOrders);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCellOrders component="th" scope="row">
          {row.orderId}
        </TableCellOrders>
        <TableCellOrders>{row.name}</TableCellOrders>
        <TableCellOrders>{formatDate(row.date)}</TableCellOrders>
        <TableCell>
          <SelectStatus
            options={orderStatusOptions.filter((status) => status.id !== 0)}
            defaultValue={orderStatusOptions.find(
              (status) => status.value === row.status || null,
            )}
            onChange={(status) => newStatusOrder(row.orderId, status.value)}
            isLoading={loading}
            menuPortalTarget={document.body}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCellBox style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                <h2 style={{ color: 'white' }}>Pedido</h2>
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCellSubHead>Quantidade</TableCellSubHead>
                    <TableCellSubHead colSpan={2} align="center">
                      Produto
                    </TableCellSubHead>
                    <TableCellSubHead>Categoria</TableCellSubHead>
                    <TableCellSubHead></TableCellSubHead>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCellSubText>{product.quantity}</TableCellSubText>
                      <TableCellSubText>{product.name}</TableCellSubText>
                      <TableCellSubText>
                        <ProductsImg src={product.url} alt={product.name} />
                      </TableCellSubText>
                      <TableCellSubText>{product.category}</TableCellSubText>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCellBox>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  orders: PropTypes.array.isRequired,
  setOrders: PropTypes.func.isRequired,
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
