import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'normalize.css';
import '@/assets/css/index.less';

import store from './store';
import App from '@/App.tsx';

const root = createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
