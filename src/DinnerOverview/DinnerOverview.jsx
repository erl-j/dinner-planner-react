import React, { Component } from "react";
import { Link } from "react-router-dom";

class DinnerOverview extends Component {

    render() {
        return (
            <React.Fragment>
                <Link to="/search">
                <button className="btn btn-outline-dark">Go back and edit dinner</button>
                </Link>
                <Link to="/printout">
                <button className="btn btn-outline-dark">Print full ingredients list</button>
                </Link>
                <h3>{"Dinner for " + this.props.nGuests}</h3>
                <div>
                    {Object.values(this.props.menu).map(dish => 
                        <div className="card faded" key={dish.id}
                        >
                          <img className="card-img-top forceRatio" src={dish.image}></img>
                          <div className="card-body">
                            <span className="card-text">{dish.title.length<14?dish.title:(dish.title.substring(0,11)+"...")}</span>
                          </div>
                        
                        </div>
                    )}
                </div>
            </React.Fragment>
        );

    }
}


export default DinnerOverview;