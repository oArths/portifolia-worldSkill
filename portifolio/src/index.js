import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './page/home/index';
import reportWebVitals from './reportWebVitals';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Analytics />
    </React.StrictMode>
);


reportWebVitals();
