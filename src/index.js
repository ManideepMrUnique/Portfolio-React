import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Apps from './Apps';
import {BrowserRouter} from "react-router-dom";
import './index.css';
ReactDom.render(

            <BrowserRouter>
                  <Apps/>
            </BrowserRouter>
      ,
      document.getElementById('root')
);