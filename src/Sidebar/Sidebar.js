import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {


  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
  }

  render() {
    let table;

    if(Object.keys(this.props.menu).length>0){
      table=
      <table>
        <tbody>
          {Object.values(this.props.menu).map(dsh=>
          <tr onClick={()=>{this.props.removeFromMenu(dsh.id);
            console.log("should remove");
          }} key={dsh.id}>
          <td>{dsh.title.length<20? dsh.title: dsh.title.substring(0,17)+"..." }
          </td>
          <td>{dsh.extendedIngredients.length*this.props.nGuests}</td>
          </tr>)}
        </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>{Object.values(this.props.menu)
                .map(dsh=>dsh.extendedIngredients.length)
                .reduce((tot,ds)=>tot+ds)*this.props.nGuests}</td>
            </tr>
          </tfoot>
      </table>
  }

    return (
      <div className="border-right">
        <h3>My dinner</h3>
        <p>
          People:
          <input
            type="number"
            value={this.props.nGuests}
            onChange={(e)=>this.props.changeNGuests(e.target.value)}
          />
          <br />
          Total number of guests: {this.props.nGuests}
        </p>
        {table}
      </div>
    );
  }
}

export default Sidebar;
