import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import SelectDish from './SelectDish/SelectDish';
import DinnerOverview from './DinnerOverview/DinnerOverview';
import Printout from './Printout/Printout';
import './App.css';
import './data/API.js';
import API from './data/API.js';

// App
//   SelectDish
//     Sidebar
//     DishSearch
//       SearchBar
//       SearchResults
//     DishDetails

var storeState = state => {
	let stateStr = encodeURIComponent(JSON.stringify(state));
	localStorage.setItem('state', stateStr);
};

var getStoredState = () => {
	var decodedCookie = decodeURIComponent(localStorage.getItem('state'));
	try {
		let state = JSON.parse(decodedCookie);
		return state;
	} catch (err) {
		console.error(err);
		return;
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = getStoredState() || {
			nGuests: 2,
			menu: {},
			isDinnerConfirmed: false,
		};
		this.api = new API();
		this.addToMenu = this.addToMenu.bind(this);
		this.removeFromMenu = this.removeFromMenu.bind(this);
		this.changeNGuests = this.changeNGuests.bind(this);
	}

	addToMenu(type, dish) {
		let newMenu = this.state.menu;
		newMenu[type] = dish;
		this.setState({ menu: newMenu });
	}

	removeFromMenu(id) {
		console.log('trying remove');
		let newMenu = this.state.menu;
		let menuKeys = Object.keys(newMenu);
		menuKeys.forEach(key => {
			if (newMenu[key].id == id) {
				delete newMenu[key];
			}
		});
		this.setState({ menu: newMenu });
	}

	changeNGuests(increment) {
		let newNGuests = Math.max(this.state.nGuests + increment, 0);
		this.setState({ nGuests: newNGuests });
	}

	componentDidMount() {
		window.addEventListener('beforeunload', () => storeState(this.state));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Dinner Planner</h1>
					<BrowserRouter>
						<React.Fragment>
							{/* We rended diffrent component based on the path */}
							<Route exact path="/" component={Welcome} />
							<Route
								path="/selectDish"
								render={({ history, match }) => (
									<SelectDish
										history={history}
										match={match}
										api={this.api}
										nGuests={this.state.nGuests}
										menu={this.state.menu}
										changeNGuests={this.changeNGuests}
										addToMenu={this.addToMenu}
										removeFromMenu={this.removeFromMenu}
										onConfirmDinner={() => this.setState({ isDinnerConfirmed: true })}
									/>
								)}
							/>
							<Route
								path="/overview"
								render={() => <DinnerOverview menu={this.state.menu} nGuests={this.state.nGuests} />}
							/>
							<Route
								path="/printout"
								render={() => <Printout menu={this.state.menu} nGuests={this.state.nGuests} />}
							/>
						</React.Fragment>
					</BrowserRouter>
				</header>
			</div>
		);
	}
}

export default App;
