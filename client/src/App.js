import React, { Component } from 'react';
import Header from './Header/Header'
import Slider from './Slider/Slider'
import Products from './Products/Products'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Slider />
        <Products />
      </div>
    );
  }
}

export default App;
