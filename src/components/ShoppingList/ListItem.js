import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ListItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.item.name}</p>
      </div>
    )
  }
}
ListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ListItem
