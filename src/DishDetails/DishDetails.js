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
      content=
      <React.Fragment>
        <h5>{this.props.dish.title}</h5>
        <button
        className="btn btn-outline-dark"
        onClick={()=>this.props.onClickAdd(this.props.dish.title,this.props.dish)}>
        Add this to menu
      </button>
    </React.Fragment>
    }
    else{
      content=<div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    }
    return (
      <div className="DishDetails">
        <h3>Dish Details</h3>
        {content}
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
