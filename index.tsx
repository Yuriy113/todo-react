import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';

const container = document.getElementById('root');

if (container instanceof HTMLElement) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}
