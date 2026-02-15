import React from 'react';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Services from './pages/Services'; 
import Contact from './pages/Contact'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/semicolon.png" className="App-logo" alt="SEMICOLON Logo" />
        <h1>Welcome to SEMICOLON</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="App-footer">
        <p>&copy; 2026 SEMICOLON. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
