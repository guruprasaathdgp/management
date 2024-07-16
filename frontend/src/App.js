
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ComplaintList from './components/complaints/ComplaintList';
import AddComplaint from './components/complaints/AddComplaint';
const App = () => (
    <Router>
        <div>
            <Routes>
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/complaints' element={<ComplaintList/>} />
                <Route path='/add-complaint' element={<AddComplaint/>} />
            </Routes>
        </div>
    </Router>
);
export default App;