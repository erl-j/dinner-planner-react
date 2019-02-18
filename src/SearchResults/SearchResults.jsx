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
      content=<div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>

    }
    else{
    content = this.props.searchResults.map(dish => (
      <div className="card" key={dish.id}
      onClick={()=>this.props.onClickDish(dish.id)}
      >
        <img className="card-img-top forceRatio" src={"https://spoonacular.com/recipeImages/"+dish.image}></img>
        <div className="card-body">
          <span className="card-text">{dish.title.length<14?dish.title:(dish.title.substring(0,11)+"...")}</span>
        </div>
      
      </div>
    ));
    }

    return (
      <div className="Dishes">
        <h3>Results</h3>
        {content}
      </div>
    );
  }
}

export default SearchResults;
