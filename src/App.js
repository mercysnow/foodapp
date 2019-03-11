import React, { Component } from 'react';
import './App.css';
import Ingredients from './components/ingredients.js';

class App extends Component {
  render() {
    return (
      <div className="App">
	<h1>FoodApp</h1> 
		<Ingredients />      
      </div>
    );
  }
}

export default App;
