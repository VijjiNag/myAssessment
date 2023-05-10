import './App.css';
import React, {Fragment} from 'react';
import Register from './components/Register'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<LoginForm />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
