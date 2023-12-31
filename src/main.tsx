import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'flexgrid.io/dist/flexgrid-utils.min.css';
import '@/styles/app.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
