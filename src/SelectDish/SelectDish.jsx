import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DishSearch from "../DishSearch/DishSearch";
import DishDetails from "../DishDetails/DishDetails";
import "./SelectDish.css";
 
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
    this.setState({
      showDetails: true,
      showSearch: false
    })
    this.props.api.getRecipe(id).then(dish =>
      this.setState({
        selectedDish: dish,
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
      dishDetails=<DishDetails className={this.state.showDetails?"col-sm-9 border-right":"hidden"}
      dish={this.state.selectedDish} 
      onClickAdd={this.props.addToMenu}
      onClickBack={this.resetSelection} 
      nGuests={this.props.nGuests}
      />;
    }
    return (
      <div className="row mh-100 no-gutters">
        <Sidebar className="col-sm-3 border-right"
          nGuests={this.props.nGuests} 
          changeNGuests={this.props.changeNGuests}
          menu={this.props.menu}
          removeFromMenu={this.props.removeFromMenu}
          onConfirmDinner={this.props.onConfirmDinner}
        />

        {dishDetails}
        <DishSearch className={this.state.showSearch?"col-sm-9 border-right":"hidden"}
        onClickDish={(id)=>this.selectDish(id)}
        api={this.props.api}
        show={this.state.showSearch}
        />
      </div>
    );
  }
}

export default SelectDish;
