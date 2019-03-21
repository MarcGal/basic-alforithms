import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        < Navbar logo="/images/logo.svg" menu="/images/menu.svg"/>
        < Header title="Say hello to ReactJS" text="You will learn a frontend framework from scratch, to becone a ninja Developer"/>
        <div className="element-margin cards">
          < Card image="/images/icon1.png" h3="Declarative" p=""/>
          < Card image="/images/icon2.png" h3="Components" p=""/>
          < Card image="/images/icon3.png" h3="Single-Way" p=""/>
          < Card image="/images/icon4.png" h3="JSX" p=""/>
        </div>
      </div>
    );
  }
}

export default App;
