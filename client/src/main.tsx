import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Wrapper.tsx';
import LoginPage from './LoginPage.tsx';
import Dashboard from './Dashboard.tsx';
import AccountPage from './AccountPage.tsx';
import Protected from './protected.tsx';
import NewReg from './NewReg.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    children: [
      { index: true, element: <App /> },
      { path: 'login', element: <LoginPage /> },
      {
        element: <Protected />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'account', element: <AccountPage /> },
          { path: 'new-regression', element: <NewReg /> }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
