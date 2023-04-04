// IMAGES
// import myImage from './logo.svg';

// STYLES
import './App.css';

// REACT ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import {useNavigate} from "react-router-dom";

// COMPONENTS
import Nav from "./components/Nav";
import CardList from './components/CardList';
import CardUser from './components/CardUser';
// import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';

// PAGES (or views)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import UserDetail from './pages/UserDetail';
// import CardList from './components/CardList';

const App = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Router>
        <div className="App">
          {/* <NavBar /> */}
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer 
              greeting={{
                title: 'Producto 1',
                quantity: '2'
              }}
            />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/detail/:id" element={<UserDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        
      <CardList />
      </Router>
    </>
  )
}

export default App;