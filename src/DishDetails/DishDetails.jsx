import React, { Component } from 'react';
import './DishDetails.css';
import IngredientsList from '../IngredientsList/IngredientsList';
import { Link } from 'react-router-dom';

class DishDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dish: null,
		};
		// We create the state to store the various statuses
		// e.g. API data loading or error
	}

	componentDidMount() {
		this.props.api.getRecipe(this.props.match.params.id).then(res => this.setState({ dish: res }));
	}

	render() {
		let content;
		(this.props);
		if (this.state.dish) {
			content = (
				<div className="row mh-100 no-gutters">
					<div className="col-sm-5">
						<h3>{this.state.dish.title}</h3>
						<button
							className="btn btn-outline-dark"
							onClick={() => this.props.onClickAdd(this.state.dish.title, this.state.dish)}
						>
							Add this to menu
						</button>

						{this.props.history.length>1?<button className="btn btn-outline-dark" onClick={() => this.props.history.goBack()}>
							Back to search
						</button>:("")}

						<p>{this.state.dish.instructions}</p>
					</div>
					<div className="col-sm-4">
						<IngredientsList
							ingredients={this.state.dish.extendedIngredients}
							nGuests={this.props.nGuests}
							servings={this.state.dish.servings}
						/>
					</div>
				</div>
			);
		} else {
			content = (
				<div className="spinner-grow" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			);
		}
		return <div>{content}</div>;
	}
}

export default DishDetails;
