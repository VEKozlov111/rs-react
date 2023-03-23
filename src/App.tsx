import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'pages/Main';
import About from 'pages/About';
import NotFoundPage from 'pages/NotFoundPage';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App min-h-screen flex flex-col dark:bg-colorD5">
      <Header />
      <main className="flex-auto lg:px-10 lg:py-4 sm:px-4 sm:py-2 p-3">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
