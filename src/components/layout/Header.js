import React from 'react'
import './Header.css';

function Header() {
  return (
    <div>
      <header className="headStyle">
        <h1>FoodBook</h1>
          <div className="LinkOp">
            <h3>Recipes</h3>|<h3>MealPLans</h3>|<h3>Ingredients</h3>
          </div>
      </header>
    </div>
  )
}



export default Header;
