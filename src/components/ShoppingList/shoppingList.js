import React, { Component } from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  render() {
    return this.props.items.map((item)=>(
      <ListItem key={item.id} item={item}/>
    ));

    }
     
   
  }

  ShoppingList.propTypes = {
    items: PropTypes.array.isRequired
  }


export default ShoppingList;