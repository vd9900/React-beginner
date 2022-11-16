import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/contact';
import './styles/app.scss'
import './styles/header.scss'
import './styles/home.scss'
import "./styles/footer.scss";
import "./styles/contact.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/contact' element={<Contact/>}  />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App; 