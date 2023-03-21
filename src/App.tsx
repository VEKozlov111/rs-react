import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App min-h-screen flex flex-col dark:bg-colorD5">
      <Header />
      <div className="flex-auto lg:px-10 lg:py-4 sm:px-4 sm:py-2 p-3"></div>
      <Footer />
    </div>
  );
}

export default App;
