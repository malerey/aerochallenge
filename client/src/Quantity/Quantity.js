import React, { Component } from 'react';

class Quantity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let length = this.props.result.data.length
    let prodslength = this.props.result.renderedData.length
    let page = this.props.result.page 

    console.log(this.props.result)

    return (
      <div className='quantity'>Page {page} | {prodslength} of {length} products</div>
    );
  }
}

export default Quantity;

