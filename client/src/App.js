import React from 'react';

import './styles/app.scss'
import Toolbar from './components/Toolbar';
import Settings from './components/Settings';
import Canvas from './components/Canvas';
import  {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/:id" element={<div><Toolbar /><Canvas /></div>}/>
        <Route path='/' element={ <Navigate to={`f${(+new Date).toString(16)}`} /> }/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
