import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { createRoot } from 'react-dom/client';
import App from './App';

dayjs.locale('zh-cn');
const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
