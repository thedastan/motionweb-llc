import React from 'react';
import { Route } from 'react-router-dom';
import Main from "../../compnents/Main/Main";
import Courses from "../../compnents/Courses/Courses";
import Dev from "../../compnents/Dev/dev";

const Home = () => {
    return (
        <div>
            <Route path="/" exact component={ Main } />
            <Route path="/courses" exact component={ Courses } />
            <Route path="/dev" exact component={ Dev } />
        </div>
    );
};

export default Home;