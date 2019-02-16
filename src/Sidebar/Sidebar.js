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

    if(this.props.menu){
      table=
      <table>
        <tbody>
        {Object.values(this.props.menu).map(dsh=><tr key={dsh.id}><td>{dsh.title}</td></tr>)}
      </tbody>
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
