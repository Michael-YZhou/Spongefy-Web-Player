import { createRoot } from 'react-dom/client';
import 'normalize.css';
import '@/assets/css/index.less';

import App from '@/App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
