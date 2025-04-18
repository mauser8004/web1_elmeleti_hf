import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import routes from '../routes'; // figyelj az elérési útra!
import reportWebVitals from './reportWebVitals';

const router = createRouter({ routeTree: routes }); // ha a routes.ts fájlban routeTree van exportálva

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

