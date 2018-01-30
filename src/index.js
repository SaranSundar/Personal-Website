import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";


import 'bulma/css/bulma.css'
import './css/index.css'
import './css/bulma-pageloader.sass'
import './css/bulma-pageloader.css'
import './css/pageloader.sass'

import "./css/shimmercss.css"
import App from "./components/App";


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
