import React, { Component } from 'react';
import logo from '../Images/aerolab-logo.svg';
import coin from '../Images/coin.svg';
import './Header.css';

class Header extends Component {

  render() {
    const received = this.props.data.received;
    const props = this.props.data.userdata

    return (
      <header>
        <div className='main-header-container'>
          <div className='logo-container'>
            <a href='/'>
              <img alt='Aerolab logo' src={logo} />
            </a>
          </div>
          <div className='user-info'>
            <div className='user-name'>{props.name}
            </div>
            <div className='user-points-container'>
              <div className='user-points'>{props.points}</div>
              <div className='user-points-icon'>
                {received ? <img src={coin} alt="Points icon"></img> : ''}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
