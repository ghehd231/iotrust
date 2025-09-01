import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import styles from './styles';

import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Global styles={styles} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
