import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            100: "#f7fafc",
            900: "#1a202c",
        },
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
);