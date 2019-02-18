import React, { Component } from "react";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import "./DishDetails.css";
import IngredientsList from "../IngredientsList/IngredientsList";


class DishDetails extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
  }

  render() {
    let content;
    if (this.props.dish) {
      content =
        <div className="row mh-100 no-gutters">
          <div className="col-sm-5">
            <h5>{this.props.dish.title}</h5>
            <p>{this.props.dish.instructions}</p>
            <button
              className="btn btn-outline-dark"
              onClick={() => this.props.onClickAdd(this.props.dish.title, this.props.dish)}>
              Add this to menu
            </button>
          </div>
          <div className="col-sm-4">
          <IngredientsList 
            ingredients={this.props.dish.extendedIngredients} 
            nGuests={this.props.nGuests} 
            servings={this.props.dish.servings}/>
          </div>


        </div>
    }
    else {
      content = <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    }
    return (
      <div >
        <h3>Dish Details</h3>
        <button
          className="btn btn-outline-dark"
          onClick={() => this.props.onClickBack()}>
          Back to search
        </button>
        {content}
      </div>
    );
  }
}

export default DishDetails;
