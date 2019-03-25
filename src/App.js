import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShoppingList from './components/ShoppingListSegment/shoppingList';
import MealPlans from './components/mealplansSegment/MealPlans';
import Recipes from './components/recipesSegment/Recipes';
import Header from './components/layout/Header';
import firstHeader from './components/layout/firstHeader';
import IngredientsPage from './components/pages/IngredientsPage';
import mealPlansPage from './components/pages/mealPlansPage';
import recipesPage from './components/pages/recipesPage';
import SignUpPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';
import './App.css';



class App extends Component {
   render(){
      const sign_up = false;
   return (
      <Router>
      <div>
      {!sign_up && (<div className='App'>
         <firstHeader />
         <Route exact path="/" render={props =>(
            <div>
               <h1>Welcome to FoodBook</h1>
            </div>)}/>
            <Route path="/SignUpPage" component={SignUpPage} />
            <Route path="/LoginPage" component={LoginPage} />
            </div>)}

      {sign_up && (<div className='App'>
          <Header />
          <Route exact path="/" render={props =>(
            <div>
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
            </div>
          )}/>
          <Route path="/IngredientsPage" component={IngredientsPage} />
          <Route path="/mealPlansPage" component={mealPlansPage} />
          <Route path="/recipesPage" component={recipesPage} />
        </div>)}
      </div>
        </Router>)
   }
}
      
    
  


export default App;
