import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import NavPage from './components/NavPage';
import './components/styles/app.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/about" element={<AboutPage/>}/>
          <Route exact path="/contact" element={<ContactPage/>}/>
          <Route exact path="/navigation" element={<NavPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
