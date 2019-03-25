import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShoppingList from './components/ShoppingListSegment/shoppingList';
import MealPlans from './components/mealplansSegment/MealPlans';
import Recipes from './components/recipesSegment/Recipes';
import Header from './components/layout/Header';
import IngredientsPage from './components/pages/IngredientsPage';
import mealPlansPage from './components/pages/mealPlansPage';
import recipesPage from './components/pages/recipesPage';
import './App.css';



class App extends Component {

  render() {
    return (
      
      );


    /*return (
      <Router>
        <div className='App'>
          <Header />
          <Route exact path="/" render={props =>(
            <React.Fragment>
              <div>
                  <h1>Home Page</h1>
              </div>
              <div>
		            <ShoppingList />
              </div>
              <div>
                <MealPlans />
              </div>
              <div>
                <Recipes />
              </div>
            </React.Fragment>
          )}/>
          <Route path="/IngredientsPage" component={IngredientsPage} />
          <Route path="/mealPlansPage" component={mealPlansPage} />
          <Route path="/recipesPage" component={recipesPage} />
        </div>
      </Router>*/
    
  }
}

export default App;
