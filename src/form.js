import React, { Component } from 'react';
import axios from 'axios';

var myStatus = "Go ahead";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
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
	  myStatus = "Submitting info";
	  this.render();
    const { name, message } = this.state;
    await axios.post(
      'https://yciq2g0499.execute-api.us-east-2.amazonaws.com/mytest/',
      { key1: `${name}, ${message}` }
    );
//	  alert("submit info");
	  this.myStatus = "Submitted info";

	  //setTimeout(function() { myStatus = "ready"; }, 3000);
  }




  render() {
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
	    <p id="status">Status: {myStatus}</p>
        </form>
      </div>
    );
  }
}
