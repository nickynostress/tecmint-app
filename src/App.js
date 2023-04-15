import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/about" element={<AboutPage/>}/>
          <Route exact path="/contact" element={<ContactPage/>}/>
        </Routes>
        <Footer />
    </Router>

  );
}

export default App;
