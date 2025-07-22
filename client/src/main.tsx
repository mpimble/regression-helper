import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Wrapper.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    children: [
      { index: true, element: <App /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'account', element: <AccountPage /> }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
