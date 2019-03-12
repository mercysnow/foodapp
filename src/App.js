import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/about';
import ShoppingList from './components/ShoppingList/shoppingList';
import MealPlans from './components/mealplans/MealPlans';
import Recipes from './components/recipes/Recipes';
import Header from './components/layout/Header';
import './App.css';
import IngredientsPage from './components/pages/IngredientsPage';
import mealPlansPage from './components/pages/mealPlansPage';
import recipesPage from './components/pages/recipesPage';



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
                <h1>Home Page</h1>
              </div>
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
          <Route path="/about" component={About} />
          <Route path="/IngredientsPage" component={IngredientsPage} />
          <Route path="/mealPlansPage" component={mealPlansPage} />
          <Route path="/recipesPage" component={recipesPage} />
        </div>
      </Router>
      
    );
  }
}

export default App;
