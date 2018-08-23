import React, { Component } from 'react';
import logo from '../Images/aerolab-logo.svg';
import coin from '../Images/coin.svg';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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
          data: result,
          received: true,
        });
      });
  }

  render() {
    const received = this.state.received;
    return (
      <header>
        <div className='main-header-container'>
          <div className='logo-container'>
            <a href='/'>
              <img alt='Aerolabs logo' src={logo} />
            </a>
          </div>
          <div className='user-info'>
            <div className='user-name'>{this.state.data.name}
            </div>
            <div className='user-points-container'>
              <div className='user-points'>{this.state.data.points}</div>
              <div className='user-points-icon'>{received ? <img src={coin} alt="Points icon"></img> : ''}</div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
