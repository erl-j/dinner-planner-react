import React, { Component } from "react";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import "./SearchResults.css";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
  }

  render() {
    let dishesList = null;

    dishesList = this.props.searchResults.map(dish => (
      <li key={dish.id}
      onClick={()=>this.props.onClickDish(dish.id)}
      >
      {dish.title}
      </li>
    ));

    return (
      <div className="Dishes">
        <h3>Dishes</h3>
        <ul>{dishesList}</ul>
      </div>
    );
  }
}

export default SearchResults;
