import React, { Component } from 'react';
import axios from 'axios';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
	stat: 'Ready now',
	    timer: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { name, message } = this.state;
    this.setState({stat : "Submitting"});
    await axios.post(
      'https://yciq2g0499.execute-api.us-east-2.amazonaws.com/mytest/',
      { key1: `${name}, ${message}` }
    );
//	  alert("submit info");
	  this.setState({stat : "Submitted info!", message : ""});
	  var myObj = this;

	  setTimeout( function() { myObj.setState({ stat : "Ready"}) }, 2000);
  }




  render() {
    var mycolor = this.state.stat ==  "Submitting" ? "red" : "green";
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />

          <button type="submit">Send</button>
	    <p id="status" style={{color: mycolor }}>Status: {this.state.stat}</p>
        </form>
      </div>
    );
  }
}
