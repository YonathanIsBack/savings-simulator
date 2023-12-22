import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import mainTheme from "./themes/mainTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ChakraProvider theme={mainTheme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
);