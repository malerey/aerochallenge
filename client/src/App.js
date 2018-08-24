import React, { Component } from 'react';
import Header from './Header/Header'
import Slider from './Slider/Slider'
import Products from './Products/Products'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {},
      received: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/user')
      .then(data => {
        return data.json();
      })
      .then(result => {
        this.setState({
          userdata: result,
          received: true,
        });
      });
  }

  render() {
    return (
      <div className="app">
        <Header data={this.state} />
        <Slider />
        <Products data={this.state}/>
      </div>
    );
  }
}

export default App;
