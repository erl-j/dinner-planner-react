import React, { Component } from "react";
import { Link } from "react-router-dom";

class DinnerOverview extends Component {

    render() {
        return (
            <React.Fragment>
                <Link to="/search">
                <button className="btn btn-outline-dark">Go back and edit dinner</button>
                </Link>
                <h3>{"Dinner for " + this.props.nGuests}</h3>
                <div>
                    {Object.values(this.props.menu).map(dsh => 
                        <div key={dsh.id}>
                            <h4>{dsh.title}</h4>
                            <img src={"https://spoonacular.com/recipeImages/" + dsh.image}></img>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );

    }
}

export default DinnerOverview;