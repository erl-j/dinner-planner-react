import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DishSearch from "../DishSearch/DishSearch";
import DishDetails from "../DishDetails/DishDetails";
import "./SelectDish.css";
import API from "../data/API";
 
// PROPS: VARS nGuests, selected dish. CFNS:
class SelectDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      showDetails: false,
      showSearch: true
    }
    this.selectDish = this.selectDish.bind(this);
    this.resetSelection = this.resetSelection.bind(this);
  }

  selectDish(id) {
    this.props.api.getRecipe(id).then(dish =>
      this.setState({
        selectedDish: dish,
        showDetails: true,
        showSearch: false
      }));
  }

  resetSelection(id) {
    this.setState({
      selectedDish: null,
      showDetails: false,
      showSearch: true
    });
  }

  render() {

    let dishDetails;
    if(this.state.showDetails){
      dishDetails=<DishDetails 
      className="col-sm-9 border-right"
      dish={this.state.selectedDish} 
      onClickAdd={this.props.addToMenu}
      onClickBack={this.resetSelection} 
      />;
    }
    return (
      <div className="row mh-100 no-gutters">
        <Sidebar className="col-sm-3 border"
          nGuests={this.props.nGuests} 
          changeNGuests={this.props.changeNGuests}
          menu={this.props.menu}
        />

        {dishDetails}
        <DishSearch 
        className="col-sm-9 border-right" 
        onClickDish={(id)=>this.selectDish(id)}
        api={this.props.api}
        />
      </div>
    );
  }
}

export default SelectDish;
