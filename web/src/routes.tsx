import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import HomePage from './pages/Home';
import Signup from './pages/SignUp'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/home" component={HomePage} />
            <Route path="/signup" component={Signup} />
        </BrowserRouter>
    )
}

export default Routes;