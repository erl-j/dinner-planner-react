import React, { Component } from "react";

class DinnerOverview extends Component {

    render() {
        return (
            <React.Fragment>
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