import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import { Bounce, ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import AppProvider from './hooks';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>

      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </AppProvider>
  </StrictMode>,
);
