import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import about from './components/pages/about';
import ShoppingList from './components/ShoppingList/shoppingList';
import MealPlans from './components/mealplans/MealPlans';
import Recipes from './components/recipes/Recipes';
import Header from './components/layout/Header';
import './App.css';



class App extends Component {
  state = {
    toBuy : [
      {
        id: 1,
        name: 'Bread',
        bought: false
      },
      {
        id: 2,
        name: 'Milk',
        bought: false
      },
      {
        id: 3,
        name: 'Butter',
        bought: false
      }
    ]
  }
  render() {
    console.log(this.state.toBuy);
    return (
      <Router>
        <div className='App'>
          <Header />
        <Route exact path="/" render={props =>(
          <React.Fragment>
            <div>
		      <ShoppingList items={this.state.toBuy} />
        </div>
        <div>
          <MealPlans />
        </div>
        <div>
          <Recipes />
        </div>
          </React.Fragment>
        )}/>
        <Route path="/about" component={about}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
