import React from 'react'

function Header() {
  return (
    <div>
    <header style={headStyle}>
    <h1>FoodBook</h1>
    </header>
    </div>
  )
}


const headStyle = {
    backgroundColor: '#004c00',
    color: '#e5c100',
    borderRadius: '5%',
    textAlign: 'left',
    padding: '10px',
    margin: '3px',
  }

export default Header;
