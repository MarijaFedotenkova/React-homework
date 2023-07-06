import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ControledCom} from './ControledComp';
import { Refs } from './Refs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <ControledCom />
    <Refs/>
    </>
);

