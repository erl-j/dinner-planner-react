import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

class DishSearch extends Component {
  constructor(props){
    super(props);
    this.state={
      searchResults:[]
    }
    this.getDishes=this.getDishes.bind(this);
  }

    getDishes(query){
      this.props.api.searchDishes(query).then((res)=>
        {this.setState({searchResults:res});
          console.log(res);
        })
    }

    
    render() {
      return (
        <div className="SearchDish">
          <h3>Find a dish</h3>
          <SearchBar searchDishes={this.getDishes}/>
          <SearchResults 
            searchResults={this.state.searchResults} 
            onClickDish={this.props.onClickDish}/>
        </div>
      );
    }
  }
  
  export default DishSearch;
  