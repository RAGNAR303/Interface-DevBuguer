import { ListIcon, ListPlusIcon, ReceiptIcon } from '@phosphor-icons/react';

export const navLinks = [
  {
    id: 1,
    label: 'Pedidos',
    path: '/admin/pedidos',
    icon: <ReceiptIcon size={32} weight="bold" />,
  },
  {
    id: 1,
    label: 'Produtos',
    path: '/admin/produtos',
    icon: <ListIcon size={32} weight="bold" />,
  },
  {
    id: 1,
    label: 'Novo Produto',
    path: '/admin//novo-produto',
    icon: <ListPlusIcon size={32} weight="bold" />,
  },
];
