import React, { Component } from 'react';

class Quantity extends Component {

  render() {
    let length = this.props.result.data.length
    let prodslength = this.props.result.renderedData.length
    let page = this.props.result.page

    return (
      <div className='quantity'>Page {page} | {prodslength} of {length} products</div>
    );
  }
}

export default Quantity;

