import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Roster from './pages/Player';
import Cheer from './pages/Cheer';
import Manager from './pages/Manager';
import Predict from './pages/Predict';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path:'/player', element: <Roster />},
      { path:'/cheer', element: <Cheer />},
      { path:'/manager', element: <Manager />},
      { path:'/predict', element: <Predict />},
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
