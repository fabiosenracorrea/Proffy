import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import HomePage from './pages/Home';
import Signup from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword';
import SignUpSuccess from './pages/Signup-Success';
import ForgotPasswordSuccess from './pages/ForgotPassword-Success';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/home" component={HomePage} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/forgot-password-success" component={ForgotPasswordSuccess} />
            <Route path="/signup-success" component={SignUpSuccess} />
        </BrowserRouter>
    )
}

export default Routes;