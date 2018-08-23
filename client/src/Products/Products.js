import React, { Component } from 'react';
import Quantity from '../Quantity/Quantity';
import Product from '../Product/Product';
import './Products.css';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      received: false, 
      toggleHighest: false,
      toggleLowest: false,
      togglenext: false,
    };
    this.higherPrice = this.higherPrice.bind(this); 
    this.lowerPrice = this.lowerPrice.bind(this); 
    this.toggleNext = this.toggleNext.bind(this); 
   }

  componentDidMount() {
    fetch('http://localhost:3001/products')
      .then(data => {
        return data.json();
      })
      .then(result => {
        this.setState({
          data: result,
          received: true,
        });
      });
      
  }

  toggleNext() {

    this.setState({
      toggleNext: true,
    });
  }

lowerPrice() {
  let prods = [...this.state.data]
  prods.sort(function(a, b) {
    return a.cost - b.cost;
  });
  this.setState({
    toggleHighest: false,
    toggleLowest: true,
    data: prods
  });
}

higherPrice() {
  let prods = [...this.state.data]
  prods.sort(function(a, b) {
    return b.cost - a.cost;
  });
  this.setState({
    toggleHighest: true,
    toggleLowest: false,
    data: prods
  });
}


  render() {
    const received = this.state.received

    return (
      <div className='main-products'>
        <div className='sort-container'>
          <Quantity result={this.state.data.length}/>
          <div className='dividor'></div>
          <div className='sort-by'>Sort by
            <div className={this.state.toggleHighest ? 'bluebtn' : 'whitebtn'} 
              onClick={this.higherPrice}>Highest price</div>
              <div className={this.state.toggleLowest ? 'bluebtn' : 'whitebtn'} 
              onClick={this.lowerPrice}>Lowest price</div>
 
          </div>
          <div className='next'>
          <div className={this.state.toggleNext ? '' : ''} 
              onClick={this.toggleNext}></div></div>
        </div>
        <div className='line'></div>
        <div>
          {received ? (
            <div className='products'>
              {this.state.data.map((result, index) => {
                return <Product key={index} result={result} />;
              })}
            </div>
          ) : (
              ''
            )}
        </div>
        <div className='sort-container'>
        <Quantity result={this.state.data.length}/>
        <div className='next'></div>
        
        </div>
        <div className='line'></div>
      </div>
    );
  }
}

export default Products;
