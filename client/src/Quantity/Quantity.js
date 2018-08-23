import React, { Component } from 'react';

class Quantity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let length = this.props.result

    return (
      <div className='quantity'>16 of {length} products</div>
    );
  }
}

export default Quantity;

