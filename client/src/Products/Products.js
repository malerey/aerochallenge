import React, { Component } from 'react';
import Quantity from '../Quantity/Quantity';
import Product from '../Product/Product';
import './Products.css';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: {},
      renderedData: [],
      received: false, 
      toggleHighest: false,
      toggleLowest: false,
      toggleNext: false, 
    };
    this.higherPrice = this.higherPrice.bind(this); 
    this.lowerPrice = this.lowerPrice.bind(this); 
    this.toggleNext = this.toggleNext.bind(this); 

   }

  componentDidMount() {
    const offset = (this.state.page - 1) * 16;
    fetch('http://localhost:3001/products')
      .then(data => {
        return data.json();
      })
      .then(result => {
        this.setState({
          data: result,
          renderedData: result.slice(offset, offset + 16),
          received: true,
        });
      });
      
  }

  toggleNext() {
    let nextPage = this.state.page + 1
    let prods = [...this.state.data]
    const offset = (nextPage - 1) * 16;
    this.setState(prevState => ({
      toggleNext: !prevState.toggleNext,
      page: nextPage,
      renderedData: prods.slice(offset, offset + 16),
    }));
  }

  lowerPrice() {
    const offset = (this.state.page - 1) * 16;
    let prods = [...this.state.data]
    prods.sort(function(a, b) {
      return a.cost - b.cost;
    });
    this.setState({
      toggleHighest: false,
      toggleLowest: true,
      data: prods,
      renderedData: prods.slice(offset, offset + 16),
    });
    }

higherPrice() {
  const offset = (this.state.page - 1) * 16;
  let prods = [...this.state.data]
  prods.sort(function(a, b) {
    return b.cost - a.cost;
  });
  this.setState({
    toggleHighest: true,
    toggleLowest: false,
    data: prods,
    renderedData: prods.slice(offset, offset + 16),
  });
}


  render() {


    console.log("holi")

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
          <div className='next'><div className={this.state.toggleNext ? 'left' : 'right'} 
              onClick={this.toggleNext}></div>
          </div>
        </div>
        <div className='line'></div>
        <div>
          {received ? (
            <div className='products'>
              {this.state.renderedData.map((result, index) => {
                return <Product key={index} result={result} />;
              })}
            </div>
          ) : (
              ''
            )}
        </div>
        <div className='sort-container'>
        <Quantity result={this.state.data.length}/>
        <div className='next'><div className={this.state.toggleNext ? 'left' : 'right'} 
              onClick={this.toggleNext}></div>
              </div>
        
        </div>
        <div className='line'></div>
      </div>
    );
  }
}

export default Products;

