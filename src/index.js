import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import NotFound from "./components/NotFound";
import Resume from "./components/Resume";

import 'bulma/css/bulma.css'
import './css/index.css'
import NavBar from "./components/NavBar";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/aboutme" component={AboutMe}/>
                <Route exact path="/resume" component={Resume}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
