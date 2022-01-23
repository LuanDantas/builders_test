import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Home/Home';
import NotFound from './Components/Common/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="login/*" element={<Login />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
