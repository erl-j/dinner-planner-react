import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            searchTerms:""
        }
    }

    render(){
        return <div>
            <input 
                onChange={(e)=>this.setState({searchTerms:e.target.value})}
            />
            <button
                onClick={()=>this.props.searchDishes(this.state.searchTerms)}
            >Search</button>
        </div>;
    }

}




export default SearchBar;