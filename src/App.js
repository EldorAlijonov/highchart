import React from 'react'
import './App.css';
import { Navbar, Sidebar } from './components';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';


const App = () => {



  return (
    <div className="app">
      <Sidebar />
      <div className="app-conatiner">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

