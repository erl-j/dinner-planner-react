import React, { Component } from "react";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import "./DishDetails.css";

class DishDetails extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
  }



  render() {
    let content;
    if(this.props.dish){
      content=<h5>{this.props.dish.title}</h5>;
    }
    else{
      content=<div class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    }
    return (
      <div className="DishDetails">
        <h3>Dish Details</h3>
        {content}
        <button 
          className="btn btn-outline-dark"
          onClick={()=>this.props.onClickAdd(this.props.dish.type,this.props.dish)}>
          Add this to menu
        </button>
        <button 
          className="btn btn-outline-dark"
          onClick={()=>this.props.onClickBack()}>
          Back to search
        </button>

      </div>
    );
  }
}

export default DishDetails;
