import React, { Component } from 'react';
import Quantity from '../Quantity/Quantity';
import Product from '../Product/Product';
import arrowleft from '../Images/arrow-left.svg'
import arrowright from '../Images/arrow-right.svg'
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
    };
    this.higherPrice = this.higherPrice.bind(this);
    this.lowerPrice = this.lowerPrice.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

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

  nextPage() {
    let plusPage = this.state.page + 1
    let prods = [...this.state.data]
    const offset = (plusPage - 1) * 16;
    this.setState({
      page: plusPage,
      renderedData: prods.slice(offset, offset + 16),
    });
  }

  previousPage() {
    let minusPage = this.state.page - 1
    let prods = [...this.state.data]
    const offset = (minusPage - 1) * 16;
    this.setState({
      page: minusPage,
      renderedData: prods.slice(offset, offset + 16),
    });
  }


  lowerPrice() {
    const offset = (this.state.page - 1) * 16;
    let prods = [...this.state.data]
    prods.sort(function (a, b) {
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
    prods.sort(function (a, b) {
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
    const received = this.state.received

    return (
      <div className='main-products'>
        <div className='sort-container'>
          <Quantity result={this.state} />
          <div className='dividor'></div>
          <div className='sort-by'>Sort by
            <div className={this.state.toggleHighest ? 'bluebtn' : 'whitebtn'}
              onClick={this.higherPrice}>Highest price</div>
            <div className={this.state.toggleLowest ? 'bluebtn' : 'whitebtn'}
              onClick={this.lowerPrice}>Lowest price</div>

          </div>

          <div className='arrows'>
            <div className='next' onClick={this.previousPage}><img src={arrowleft} /></div>
            <div className='previous' onClick={this.nextPage}><img src={arrowright} /></div>
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
          <Quantity result={this.state} />

          <div className='arrows'>
            <div className='next' onClick={this.previousPage}><img src={arrowleft} /></div>
            <div className='previous' onClick={this.nextPage}><img src={arrowright} /></div>
          </div>

        </div>

        <div className='line'></div>
      </div>
    );
  }
}

export default Products;
