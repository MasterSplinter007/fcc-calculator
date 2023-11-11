import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



ReactDOM.render(<App />, rootElement);
