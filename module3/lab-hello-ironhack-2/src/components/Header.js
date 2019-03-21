import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="background-dark element-margin">
         <h1> { this.props.title }</h1>
         <p className="header-text"> { this.props.text } </p> 
         <button>Awsome!</button>
      </header>
    )
  }
}

export default Header;