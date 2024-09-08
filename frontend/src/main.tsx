import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import React from 'react';
import ShopContextProvider from './context/ShopContext.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
