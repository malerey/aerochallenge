import React, { Component } from "react";
import coin from '../Images/coin.svg';
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.redeemNow = this.redeemNow.bind(this);
  }

  redeemNow() {

  }

  render() {
    const props = this.props.result
    const user = this.props.user 
    const missingpoints = props.cost - user.points


    let buyicon = ''
    let available = 'result-container unavailable'
    let redeemtext = 'You still need ' + missingpoints + ' points'
    let redeem = <button className='noredeem' disabled>{redeemtext}</button>
    let middle = 'middle middleunavailable'

    if (user.points > props.cost) {
      buyicon = 'buy-icon';
      available = 'result-container'
      redeem = <button className='redeem' onClick={this.handleRedeem}>Redeem now!</button>
      middle = 'middle middleavailable'
    }

    return (
      <div className='container'>
      <div className={buyicon}>
        </div>

        <div className={available}>

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
        <div className={middle}>
          <div className='points-product'>{props.cost}
            <div className='points-icon'><img src={coin} alt="Points icon"></img>
            </div></div>
          
          
        </div>
        {redeem}
      </div>

    );
  }
}

export default Product;

