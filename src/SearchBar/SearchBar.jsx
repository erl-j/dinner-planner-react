import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerms: "",
            type: ""
        }
        this.searchAction = this.searchAction.bind(this);
    }

    searchAction = () => this.props.searchDishes(this.state.searchTerms,this.state.type);
    render() {
        return <div className="border-bottom">
            <input
                onChange={(e) => this.setState({ searchTerms: e.target.value })}
            />
            <button
                onClick={this.searchAction}
            >Search</button>
            <select onChange={(event)=>{
                this.setState({type:event.target.value},()=>this.searchAction());
                console.log(event.target.value);}}id="dropdown" className="btn btn-outline-dark">
							<option value="">all</option>
							<option value="starter">starter</option>
							<option value="main course">main course</option>
							<option value="dessert">dessert</option>
							<option value="side dish">side dish</option>
							<option value="appetizer">appetizer</option>
							<option value="salad">salad</option>
							<option value="bread">bread</option>
							<option value="breakfast">breakfast</option>
							<option value="soup">soup</option>
							<option value="beverage">beverage</option>
							<option value="sauce">sauce</option>
							<option value="drink">drink</option>	
					  </select> 
        </div>;
    }

}




export default SearchBar;