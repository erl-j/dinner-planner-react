import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {

  render() {
    let tableBody;

    let fullW = { width: '100%' }

    if (Object.keys(this.props.menu).length > 0) {
      tableBody =
        <tbody>
          {Object.values(this.props.menu).map(dsh =>
            <tr onClick={() => {
              this.props.removeFromMenu(dsh.id);
              console.log("should remove");
            }} key={dsh.id}>
              <td>{dsh.title.length < 20 ? dsh.title : dsh.title.substring(0, 17) + "..."}
              </td>
              <td>{dsh.extendedIngredients.length * this.props.nGuests}</td>
            </tr>)}
        </tbody>
    }
    return (
      <div
      // style={fullW}
      >
        <h3>My dinner</h3>
        {/* <p>
          People:
          <input className=""
            type="number"
            value={this.props.nGuests}
            onChange={(e) => this.props.changeNGuests(e.target.value)}
          />
          <br />
          Total number of guests: {this.props.nGuests}
        </p> */}
        <h6 class="btn">
          People: {this.props.nGuests}
        </h6>
        <div class="btn-group">
          <button onClick={()=>this.props.changeNGuests(-1)}
            class="btn btn-outline-dark btn-sm">
            -
          </button>
          <button onClick={()=>this.props.changeNGuests(1)}
            class="btn btn-outline-dark btn-sm">
            +
          </button>
        </div>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>dish name</th>
              <th>cost</th>
            </tr>
          </thead>
          {tableBody}
          <tfoot>
            <tr>
              <td></td>
              <td>{
                Object.keys(this.props.menu).length > 0 ? (
                  Object.values(this.props.menu)
                    .map(dsh => dsh.extendedIngredients.length)
                    .reduce((tot, ds) => tot + ds) * this.props.nGuests) : 0}
              </td>

            </tr>
          </tfoot>
        </table>
        <Link to="/overview">
          <button className="btn-block btn btn-outline-dark">
            Confirm Dinner
          </button>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
