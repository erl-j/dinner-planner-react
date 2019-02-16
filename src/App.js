import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import SelectDish from "./SelectDish/SelectDish";
import "./App.css";
import "./data/API.js"
import API from "./data/API.js";


// App
//   SelectDish
//     Sidebar
//     DishSearch
//       SearchBar
//       SearchResults
//     DishDetails
    


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nGuests:0,
      menu:{},
    };
    this.api=new API();
    this.addToMenu=this.addToMenu.bind(this);
  }

  addToMenu(type,dish){
    let newMenu=this.state.menu;
    newMenu[type]=dish;
    this.setState({menu:newMenu});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dinner Planner</h1>

          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome} />
          <Route
            path="/search"
            render={() => 
            <SelectDish
              api={this.api}
              nGuests={this.state.nGuests} 
              menu={this.state.menu} 
              changeNGuests={(newValue)=>{
                this.setState({nGuests:newValue});
                console.log("app says: changed number of guests");
                }}
              addToMenu={this.addToMenu}
              />}
          />
        </header>
      </div>
    );
  }
}

export default App;
