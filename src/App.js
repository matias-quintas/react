import React from "react";

// STYLES & IMAGES
import './App.css';

// COMPONENTS
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

// REACT ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer
              greeting={{
                title: 'Producto 1',
                quantity: '2'
              }}
            />} />
            <Route path='/category/:id' />
            <Route path='/item/:id' />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;