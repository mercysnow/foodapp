import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
      <header className="headStyle">
          <h1 className="H1">FoodBook</h1>
          <div className="Links">
            <p>|</p><Link className="LinkStyle" to="/">Home</Link><p>|</p>
            <Link className="LinkStyle" to="/recipesPage">Recipes</Link><p>|</p>
            <Link className="LinkStyle" to="/mealPlansPage">MealPLans</Link><p>|</p>
            <Link className="LinkStyle" to="/IngredientsPage">Ingredients</Link><p>|</p>
          </div>
      </header>
  )
}



export default Header;
