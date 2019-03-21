import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
       <nav className="background-dark element-margin">
        <div className="iron-logo">
        <img src={this.props.logo} alt=""/>
        </div>
        <div className="menu">
          <img src={ this.props.menu } alt=""/>
        </div>
       </nav>
    )
  }
}

export default Navbar;