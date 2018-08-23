import React, { Component } from "react";
import coin from '../Images/coin.svg';
import arrowleft from '../Images/arrow-left.svg';
import arrowright from '../Images/arrow-right.svg';
import "./Product.css";

class Product extends Component {

  render() {
    const props = this.props.result

    return (
      <div className='container'>
      <div className='buy-icon'>
        </div>
        <div className="result-container">

        

          <div className="img">
            <img
              alt={props.name}
              src={props.img.url}
            />
          </div>

          <div className='line-small'></div>
          <div className="category-result">
            <span>{props.category}</span>
          </div>

          <div className="title-result">
            <span>{props.name}</span>
          </div>


        </div>
        <div className='middle'>
          <div className='points-product'>{props.cost}
            <div className='points-icon'><img src={coin} alt="Points icon"></img>
            </div></div>
          
          
        </div>
        <div className='redeem'>Redeem now</div>
      </div>

    );
  }
}

export default Product;

