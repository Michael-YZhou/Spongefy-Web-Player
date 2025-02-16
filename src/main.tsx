import { createRoot } from 'react-dom/client';
import 'normalize.css';
import '@/assets/css/index.less';
import App from '@/App.tsx';

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
