import React, { Component } from 'react';
import './SearchBar.css';

const types = [
	'starter',
	'main course',
	'dessert',
	'side dish',
	'appetizer',
	'salad',
	'bread',
	'breakfast',
	'soup',
	'beverage',
	'sauce',
	'drink',
];

class SearchBar extends Component {

	render() {
		return (
			<div className="border-bottom">
				<input defaultValue={this.props.query} onChange={e => this.props.setQuery( e.target.value )} />
				<button onClick={this.props.search}>Search</button>
				<select
                    value={this.props.type}
					onChange={event => {
                        console.log(event.target);
						this.props.setType(event.target.value,this.props.search);
					}}
					id="dropdown"
					className="btn btn-outline-dark"
				>
					<option value="">all</option>
					{types.map(t=><option key={t} value={t} >{t}</option>)}
				</select>
			</div>
		);
	}
}

export default SearchBar;
