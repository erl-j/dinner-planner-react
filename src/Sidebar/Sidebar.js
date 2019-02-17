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
    let tableBody;

    if(Object.keys(this.props.menu).length>0){
      tableBody=
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
                Object.keys(this.props.menu).length>0?(
                Object.values(this.props.menu)
                .map(dsh=>dsh.extendedIngredients.length)
                .reduce((tot,ds)=>tot+ds)*this.props.nGuests):0}
              </td>
                
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Sidebar;
