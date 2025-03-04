import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AppLayout from './components/AppLayout';
import Error from './components/Error';
import RegistrationDetails from './components/RegistrationDetails';
import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '*',
        element: <Error />,
      },
      {
        path: '/registrationDetails/:id',
        element: <RegistrationDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
