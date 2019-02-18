import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import SelectDish from "./SelectDish/SelectDish";
import DinnerOverview from "./DinnerOverview/DinnerOverview";
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
      nGuests: 2,
      menu: {},
      isDinnerConfirmed:false
    };
    this.api = new API();
    this.addToMenu = this.addToMenu.bind(this);
    this.removeFromMenu = this.removeFromMenu.bind(this);
  }

  addToMenu(type, dish) {
    let newMenu = this.state.menu;
    newMenu[type] = dish;
    this.setState({ menu: newMenu });
  }

  removeFromMenu(id) {
    console.log("trying remove");
    let newMenu = this.state.menu;
    let menuKeys = Object.keys(newMenu);
    menuKeys.forEach(key => {
      if (newMenu[key].id == id) {
        delete newMenu[key];
      }
    })
    this.setState({ menu: newMenu });
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
                changeNGuests={(increment) => {
                  this.setState({ nGuests: Math.max(this.state.nGuests+increment, 0) });
                  console.log("app says: changed number of guests");
                }}
                addToMenu={this.addToMenu}
                removeFromMenu={this.removeFromMenu}
                onConfirmDinner={()=>this.setState({isDinnerConfirmed:true})}
              />}
          />
          <Route path="/overview"
          render={()=>
            <DinnerOverview menu={this.state.menu} nGuests={this.state.nGuests}></DinnerOverview>
          }
          />
        </header>
      </div>
    );
  }
}

export default App;
