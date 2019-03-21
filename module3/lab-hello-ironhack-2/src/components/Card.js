import React, { Component } from 'react';

const p = <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, laborum eos in obcaecat.</p>

class Card extends Component {
  render() {
    return (
      <div>
         <div>
           <img src={this.props.image} alt=""/>
         </div>
         <div>
           <h3>{ this.props.h3 }</h3>
          { p }
         </div>
      </div>
    )
  }
}

export default Card;