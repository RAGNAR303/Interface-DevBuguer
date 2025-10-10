import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import {
  CustomTable,
  Filter,
  FilterOption,
  TableCellHead,
  TableHeadCuston,
} from './styles';
import { orderStatusOptions } from './orderStatus';

export function Orders() {
  const [orders, setOrders] = useState([]); // Backup
  const [filteredOrders, setFilteredOrders] = useState([]); // Os valores que estão na tela
  const [activeStatus, setActiveStatus] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/orders'); // => chamada api na rota orders

      setOrders(data);
      setFilteredOrders(data);
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  function handleStatus(status) {
    console.log({ status });
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);
      setFilteredOrders(newOrders);
    }

    setActiveStatus(status.id);
  }

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = orderStatusOptions.findIndex(
        (item) => item.id === activeStatus,
      );

      const newFilteredOrders = orders.filter(
        (order) => order.status === orderStatusOptions[statusIndex].value,
      );

      setFilteredOrders(newFilteredOrders);
    }
  }, [activeStatus, orders]);

  return (
    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>
      <CustomTable component={Paper}>
        <Table aria-label="collapsible table">
          {/* Lebel da coluna  */}
          <TableHeadCuston>
            <TableRow>
              <TableCellHead />
              <TableCellHead>Pedidos</TableCellHead>
              <TableCellHead>Nome do Cliente</TableCellHead>
              <TableCellHead>Data do Pedido</TableCellHead>
              <TableCellHead>Status</TableCellHead>
            </TableRow>
          </TableHeadCuston>
          {/* linhas da coluna  */}
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </CustomTable>
    </>
  );
}
