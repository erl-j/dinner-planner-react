import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            searchTerms:""
        }
        this.searchAction=this.searchAction.bind(this);
    }

    searchAction=()=>this.props.searchDishes(this.state.searchTerms);
    render(){
        return <div>
            <input 
                onChange={(e)=>this.setState({searchTerms:e.target.value})}
            />
            <button
                onClick={this.searchAction}
                // onKeyDown={(event)=>{
                //     if(event.key=='Enter')
                //         {console.log("enter pressed");
                //         this.searchAction;}}}
                //         tabIndex="0"
            >Search</button>
        </div>;
    }

}




export default SearchBar;