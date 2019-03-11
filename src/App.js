import React, { Component } from 'react';
import './App.css';
import ShoppingList from './components/shoppingList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		<h1>FoodApp</h1> 
		  <ShoppingList />      
      </div>
    );
  }
}

export default App;
