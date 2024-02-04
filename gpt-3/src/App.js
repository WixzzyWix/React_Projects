import React from 'react';
import {Blog, Footer, Features, Possibility, Header, WhatGPT3} from './containers';
import { Brand, CTA, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='APP'>
      <div className="gradient__bg">
      <Navbar />
      <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    
    </div>
  )
}

export default App
