import React from 'react';
import { Cta, Brand, Navbar } from './components';
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Header,
  WhatGPT3,
} from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
      <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default App;
