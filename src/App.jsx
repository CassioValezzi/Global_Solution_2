

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
// Styles
import GlobalStyles from "./style/globalstyle";
import "bootstrap/dist/css/bootstrap.css";

// rotas
import { PrivateRoute } from './routes/privateRoute'

// pages
import Singin from './pages/singin';
import Home from './pages/home';

function App() {
  return (

    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={
          <PrivateRoute> 
            <Home/> 
            </PrivateRoute>}/>
        <Route path='/login' element={<Singin />} />
        
      </Routes>
    </Router>



  );
}

export default App;
