import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './pages/Admin/Admin';
import Cadastro from './pages/Cadastro/Cadastro';
import {createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/> ,
  },
  {
    path: '/admin',
    element: <Admin/> ,
  },
  {
    path: '/Cadastro',
    element: <Cadastro/> ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
