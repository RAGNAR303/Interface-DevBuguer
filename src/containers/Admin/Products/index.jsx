import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import {
  CustomTable,
  ImgProduct,
  TableCellProducts,
  TableHeadCuston,
  TablePaginationCuston,
} from './styles';
import { CardButton } from '../../../components';
import {
  CheckFatIcon,
  PencilSimpleLineIcon,
  XCircleIcon,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'image', label: 'Imagem', minWidth: 100 },
  { id: 'category', label: 'Categoria', minWidth: 100 },
  { id: 'price', label: 'Preço', minWidth: 100 },
  { id: 'onSale', label: 'Em oferta?', minWidth: 100 },
  { id: 'edit', label: 'Editar', minWidth: 30 },
];

export function Products() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  // Busca os produtos da API
  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }

    loadProducts();
  }, []);

  // Paginação
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function isOffer(offer) {
    if (offer) {
      return <CheckFatIcon size={32} color="#22cd00" />;
    } else {
      return <XCircleIcon size={32} color="#cd0000" />;
    }
  }

  function editeProcuts(product) {
    navigate('/admin/editar-produto', { state: { product } });
  }

  return (
    <CustomTable sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="tabela de produtos">
          {/* Cabeçalho */}
          <TableHeadCuston>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: 'bold',
                    background: '#f17535',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHeadCuston>

          {/* Corpo da Tabela */}
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <TableRow hover key={product._id || product.id}>
                  {/* Nome */}
                  <TableCellProducts>{product.name}</TableCellProducts>

                  {/* Imagem */}
                  <TableCell>
                    <ImgProduct src={product.url} alt={product.name} />
                  </TableCell>
                  <TableCellProducts>{product.category.name}</TableCellProducts>
                  {/* Preço */}
                  <TableCellProducts>
                    {' '}
                    {formatPrice(product.price)}
                  </TableCellProducts>

                  {/* Em oferta */}
                  <TableCellProducts>
                    {isOffer(product.offer)}
                  </TableCellProducts>

                  {/* Botão Editar */}
                  <TableCell>
                    <CardButton onClick={() => editeProcuts(product)}>
                      <PencilSimpleLineIcon tamanho={20} peso="negrito" />{' '}
                    </CardButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Paginação */}
      <TablePaginationCuston
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Linhas por página"
      />
    </CustomTable>
  );
}
