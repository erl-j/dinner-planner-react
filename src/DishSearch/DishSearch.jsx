import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

class DishSearch extends Component {
  constructor(props){
    super(props);
    this.state={
      searchResults:[],
      isSearching:false
    }
    this.getDishes=this.getDishes.bind(this);
    
  }

    getDishes(query,type){
      this.setState({isSearching:true});
      this.props.api.searchDishes(query,type).then((res)=>
        {this.setState({searchResults:res,isSearching:false});
        })
    }

    componentDidMount(){
      this.getDishes("","");
    }
    
    render() {
      let content;
      if(this.props.show){
        content=<div>
        <h3>Find a dish</h3>
        <SearchBar searchDishes={this.getDishes}/>
        <SearchResults 
          searchResults={this.state.searchResults} 
          onClickDish={this.props.onClickDish}
          isSearching={this.state.isSearching}/>
      </div>;
      }
      return <React.Fragment>{content}</React.Fragment>;
      
    }
  }
  
  export default DishSearch;
  