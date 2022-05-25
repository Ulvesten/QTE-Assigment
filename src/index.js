import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontFamily: ['Montserrat'].join(','),
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
