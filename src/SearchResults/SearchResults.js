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
    
    let content = null;
    if(this.props.isSearching){
      content=<div class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>

    }
    else{
    content = this.props.searchResults.map(dish => (
      <li key={dish.id}
      onClick={()=>this.props.onClickDish(dish.id)}
      >
      {dish.title}

      </li>
    ));
    }

    return (
      <div className="Dishes">
        <h3>Dishes</h3>
        <ul>{content}</ul>
      </div>
    );
  }
}

export default SearchResults;
