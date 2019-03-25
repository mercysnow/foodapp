import React from 'react'
import { Link } from 'react-router-dom';
import './firstHeader.css';
 
 function firstHeader() {
   return (
   <header className="headStyle">
      <h1 className="H1">FoodBook</h1>
      <div className="Links">
         <Link className="LinkStyle" to="/SignUpPage">MealPLans</Link><p>|</p>
         <Link className="LinkStyle" to="/LoginPage">Ingredients</Link><p>|</p>
      </div>
    </header>
    )
 }
                 
                
                    
                    
 export default firstHeader;

