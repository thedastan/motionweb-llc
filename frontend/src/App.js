import React from 'react';
import './App.css';
import Home from './containers/Home/home';
import { Switch, Route } from 'react-router-dom';
import Courses from "./compnents/Courses/Courses";
import Dev from "./compnents/Dev/dev";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/courses" exact component={ Courses } />
                <Route path="/dev" exact component={ Dev } />
            </Switch>
        </div>
    );
}


export default App;
